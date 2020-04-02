import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputTextComponent } from './input-components/custom-input-text/custom-input-text.component';
import { CustomInputPasswordComponent } from './input-components/custom-input-text/custom-input-password/custom-input-password.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        CustomInputTextComponent,
        CustomInputPasswordComponent
    ],
    exports: [
        ReactiveFormsModule,
        CustomInputTextComponent,
        CustomInputPasswordComponent
    ],
    entryComponents: [],
})
export class SharedModule { }
