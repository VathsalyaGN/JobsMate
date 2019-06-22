import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {
  obj: User;
  
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z0-9 ]{8,}')]),
    email: new FormControl('', [Validators.required,Validators.email]),
    role: new FormControl('user', [Validators.required]),
    phonenumber: new FormControl('', [Validators.required,Validators.pattern('[789][0-9]{9}')])
});
  

  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  getEmailErrorMessage() {
    return this.profileForm.get('email').hasError('required') ? 'You must enter a value' :
    this.profileForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }
  getUsernameErrorMessage(){
    return this.profileForm. get('name').hasError('required') ?'you must enter a value':'';    
  }
  getPasswordErrorMessage(){
    return this.profileForm.get('password').hasError('required')?'you must enter a value':
    this.profileForm.get('password').value.length<8?'length should be greater than 8': 
    this.profileForm.get('password').hasError('pattern')?'':'';
  }
  getRoleErrorMessage(){
    return this.profileForm.get('role').hasError('required')?'':'';
  }
getPhonenumberErrorMessage(){
  return this.profileForm.get('phonenumber').hasError('required') ?'you must enter a value':
  this.profileForm.get('phonenumber').hasError('pattern')?'pattern must match':'';
}
onSubmit(){
 
  }
}


  


