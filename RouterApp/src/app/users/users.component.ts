import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users:any;
  constructor(private userService:UserServiceService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users=>{
      this.users=users
    })
  }
}
