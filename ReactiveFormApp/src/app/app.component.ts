import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  // standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSubmitted = false;
  loginForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required])
  })
  login(){
    console.log(this.loginForm.value)
    this.isSubmitted = true;
  }
  get name(){
    return this.loginForm.get('name')
  }
  get password(){
    return this.loginForm.get('password')
  }
  get email(){
    return this.loginForm.get('email')
  }
}
