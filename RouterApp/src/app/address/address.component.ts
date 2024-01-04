import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit{
  address:any;
  constructor(private route:ActivatedRoute){}
  
  ngOnInit(): void {
    const address=this.route.snapshot.queryParams
    console.log(address)
    this.address=address
  }
}
