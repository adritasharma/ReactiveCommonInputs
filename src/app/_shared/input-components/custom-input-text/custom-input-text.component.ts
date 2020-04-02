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
      // useFactory: (container: ControlContainer) => container,
      // deps: [[new SkipSelf(), ControlContainer]]   
    }
  ]
})
export class CustomInputTextComponent implements OnInit {

  @Input() controlName: string;
  @Input() label: string;
  @Input() placeHolder: string;
  @Input() inputError: string;
  @Input() disabled: boolean;
  @Input() focus: boolean

  @Output() blur = new EventEmitter();

  @ViewChild('ref') ref: ElementRef;

  inputValue: any


  constructor() { }

  ngOnInit() {
    if (!this.label) {
      this.label = this.controlName
    }
    if (!this.placeHolder) {
      this.placeHolder = this.label
    }
  }

  onBlur() {
    this.blur.emit()
  }

  onKeyUp() {
    this.inputValue = this.ref.nativeElement.value;
  }

}












