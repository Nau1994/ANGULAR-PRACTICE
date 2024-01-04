import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  loggedIn=false
  constructor(private authService:AuthService){}

  ngOnInit(): void {
      // this.loggedIn=this.authService.autoLogin()
      this.authService.userSub.subscribe(user=>{
        if(user?.token){
          this.loggedIn=true
          
        }else{
          this.loggedIn=false
        }
      })
  }

  onLogOut(){
    this.authService.logout()
    this.loggedIn=false
  }
}
