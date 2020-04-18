import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomInputTextComponent } from './input-components/custom-input-text/custom-input-text.component';
import { CustomInputPasswordComponent } from './input-components/custom-input-password/custom-input-password.component';
import { CustomInputRadioComponent } from './input-components/custom-input-radio/custom-input-radio.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        CustomInputTextComponent,
        CustomInputPasswordComponent,
        CustomInputRadioComponent
    ],
    exports: [
        ReactiveFormsModule,
        CustomInputTextComponent,
        CustomInputPasswordComponent,
        CustomInputRadioComponent
    ],
    entryComponents: [],
})
export class SharedModule { }
