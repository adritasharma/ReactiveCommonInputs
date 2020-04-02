/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustomInputRadioComponent } from './CustomInputRadio.component';

describe('CustomInputRadioComponent', () => {
  let component: CustomInputRadioComponent;
  let fixture: ComponentFixture<CustomInputRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomInputRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
