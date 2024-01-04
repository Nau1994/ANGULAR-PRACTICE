import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  active=1
  user:any;
  constructor(private userService:UserServiceService,
    private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id')
    this.userService.getUser(Number(id)).subscribe(user=>{
      this.user=user
    })
  }
}
