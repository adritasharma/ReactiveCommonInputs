import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from './_shared/services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder, private _validate: ValidationService) { }

  signUpForm: FormGroup;

  validationMessages = {
    'Fullname': {
      'required': 'Name is required.',
    },
    'Email': {
      'required': 'Email is required.',
      'pattern': 'Please provide valid Email ID'
    },
    'Mobileno': {
      'pattern': 'Please provide valid Phone No'
    },
    'Password': {
      'required': 'Password is required.'
    },
    'ConfirmPassword': {
      'required': 'Confirm Password is required.',
      'mismatch': 'Password and Confirm Password do not match'
    }
  };
  formErrors = {};

  ngOnInit() {
    this.signUpForm = this.fb.group({
      Fullname: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.pattern(this._validate.regex.email)]],
      Mobileno: ['', Validators.pattern(this._validate.regex.phone)],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    },
      {
        validator: this._validate.matchConfirmItems('Password', 'ConfirmPassword'),
      });
    this.detectValueChanges()
  }
  detectValueChanges() {
    this.signUpForm.valueChanges.subscribe(
      value => {
        this.logValidationErrors()
      }
    );
  }
  onSubmit() {
    console.log(this.signUpForm.value)

  }

  logValidationErrors() {
    this.formErrors = this._validate.getValidationErrors(this.signUpForm, this.validationMessages);
  }
}
