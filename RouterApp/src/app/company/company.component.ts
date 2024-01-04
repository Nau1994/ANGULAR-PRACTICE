import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{
company:any;
constructor(private route:ActivatedRoute){}

ngOnInit(): void {
  const company=this.route.snapshot.queryParams
  console.log(company)
  this.company=company
}

}
