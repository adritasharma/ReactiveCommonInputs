import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'input-select',
  templateUrl: './custom-input-select.component.html',
  styleUrls: ['./custom-input-select.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
      // useFactory: (container: ControlContainer) => container,
      // deps: [[new SkipSelf(), ControlContainer]]   
    }
  ]
})
export class CustomInputSelectComponent implements OnInit {

  constructor() { }

  @Input() controlName: string;
  @Input() itemList: any[]
  @Input() label: string;
  @Input() placeHolder: string;
  @Input() inputError: string;
  @Input() disabled: boolean;
  @Input() focus: boolean

  @Output() blur = new EventEmitter();

  @ViewChild('ref') ref: ElementRef;

  inputValue: any

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.itemList) {
      this.itemList = changes.itemList.currentValue;
      if ((this.itemList.filter(x => x.id == null).length) < 1) {
        this.itemList.unshift(
          {
            id: null,
            text: `  -- Select ${this.label} --`
          }
        )
      }
    }
  }
}
