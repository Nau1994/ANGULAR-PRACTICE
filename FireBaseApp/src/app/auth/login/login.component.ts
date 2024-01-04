import { AfterViewInit,AfterViewChecked, Component, ViewChild, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit ,AfterViewInit, AfterViewChecked{

  @ViewChild('loginForm') loginForm!:NgForm

  loggedIn=false
  constructor(private authService:AuthService,private router:Router,private alertService:AlertService,private vcr:ViewContainerRef){}

  ngOnInit(): void {
    this.loggedIn=this.authService.autoLogin()

  }

  ngAfterViewInit(): void {
    // console.log(this.loginForm.value)
  }

  ngAfterViewChecked(): void {
    // console.log(this.loginForm.value)
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.authService.userLogin(this.loginForm.value.email,this.loginForm.value.password).subscribe(
        response=>{
          console.log(response)
          this.loggedIn=true
          this.router.navigate(['/'])
        },
        error=>{
          console.log(error)
          this.alertService.showErrorAlertUsingNgbModal(error)
        }
      )
    }
  }

  onLogOut(){
    this.authService.logout()
    this.loggedIn=false
  }

  onSignUp(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.authService.userSignUp(this.loginForm.value.email,this.loginForm.value.password).subscribe(
        response=>{console.log(response)},
        error=>{
          console.log(error)
          this.alertService.showErrorAlertUsingCustomeModal(error,this.vcr)
        }
      )
    }
    
  }
}
