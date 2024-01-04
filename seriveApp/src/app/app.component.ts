import {  Component, OnInit ,ViewChild} from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable,Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'seriveApp';
  users:any=[];
  errorMessage:string="Data Loading..."

  constructor(private userservice:UserServiceService,
    private modalService:NgbModal){}

  ngOnInit(){
    
    this.userservice.getUser().subscribe((data)=>{
      this.users=data
    },(error)=>{
      this.errorMessage=`${error}`
      const modalRef=this.modalService.open(ErrorModalComponent)
      modalRef.componentInstance.errorBody=this.errorMessage
    })

    const proms=new Promise(resolve=>{
      setTimeout(() => {
        resolve(Math.random())
      }, 1000);
    })

    proms.then(data=>console.log("then1:",data))
    proms.then(data=>console.log("then2:",data))

    const obsv=new Observable(sub=>{
      setTimeout(() => {
        sub.next(Math.random())
      }, 1000);
    })

    obsv.subscribe(data=>console.log("subscribe1:",data))
    obsv.subscribe(data=>console.log("subscribe2:",data))

    const subject=new Subject()
    // subject.complete()
    subject.subscribe(data=>console.log("subject1:",data))
    subject.subscribe(data=>console.log("subject2:",data))
    subject.next(Math.random())

    const behaviorSubject=new BehaviorSubject<number>(12)
    behaviorSubject.next(Math.random())
    behaviorSubject.subscribe(data=>console.log("behaviorSubject1:",data))
    behaviorSubject.subscribe(data=>console.log("behaviorSubject2:",data))
  }
}
