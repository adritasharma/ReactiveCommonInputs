import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, SkipSelf } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'input-text',
  templateUrl: './custom-input-text.component.html',
  styleUrls: ['./custom-input-text.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective   
    }
  ]
})
export class CustomInputTextComponent implements OnInit {

  @Input() controlName: string;
  @Input() placeholder: string;
  @Input() inputError: string;
  @Input() disabled: boolean;
  @Input() focus: boolean

  @Output() blur = new EventEmitter();

  @ViewChild('ref') ref: ElementRef;

  inputValue: any


  constructor() { }

  ngOnInit() {
    if (!this.placeholder) {
      this.placeholder = this.controlName
    }
  }

  onBlur() {
    this.blur.emit()
  }

  onKeyUp() {
    this.inputValue = this.ref.nativeElement.value;
  }

}












