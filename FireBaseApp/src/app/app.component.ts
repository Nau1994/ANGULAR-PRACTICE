import { Component, OnChanges, OnInit } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  loggedIn=false
  constructor(private authService:AuthService){}

  ngOnInit(): void {
      this.loggedIn=this.authService.autoLogin()
  }

}
