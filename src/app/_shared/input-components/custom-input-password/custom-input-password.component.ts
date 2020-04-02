import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'input-password',
  templateUrl: './custom-input-password.component.html',
  styleUrls: ['./custom-input-password.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class CustomInputPasswordComponent implements OnInit {

  @Input() controlName: string;
  @Input() placeholder: string;
  @Input() inputError: string;
  @Input() disabled: boolean;
  @Input() focus: boolean
  @Input() showEye: boolean;

  @Output() blur = new EventEmitter();

  @ViewChild('ref') ref: ElementRef;

  inputValue: any
  inputType ='password'

  constructor() { }

  ngOnInit() {
    if (!this.placeholder) {
      this.placeholder = this.controlName
    }
  }
  show = false;



  onClick() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
      this.show = true;
    } else {
      this.inputType = 'password';
      this.show = false;
    }
  }

  onBlur() {
    this.blur.emit()
  }

  onKeyUp() {
    this.inputValue = this.ref.nativeElement.value;
  }


}

