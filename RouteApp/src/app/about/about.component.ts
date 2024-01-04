import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  userId:any
  constructor(private route:ActivatedRoute){}
ngOnInit(){
  this.userId=this.route.snapshot.paramMap.get('id')
}
}
