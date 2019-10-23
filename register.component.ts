import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { User } from 'src/app/models/user';
//import { c } from '../helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = true;

  constructor(private formBuilder: FormBuilder) { }



  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]*$/)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z ]*$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{8}(?:-[0-9]{8})?$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatpassword: new FormControl('', [Validators.required])
    }
    );
  }


  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get phone() { return this.registerForm.get('phone'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get repeatpassword() { return this.registerForm.get('repeatpassword'); }


  register() {
  //  console.log(this.registerForm.value);
    let data = this.registerForm.value;
    let user = new User(null,data.firstName,data.lastName,data.phone,data.email,data.password);

  }




}