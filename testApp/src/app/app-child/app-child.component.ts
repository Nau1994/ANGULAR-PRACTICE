import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.css'
})
export class AppChildComponent {
  // counter : number = 0;   

  @Output() counterChange :  EventEmitter<number>;
     constructor(){
      
         this.counterChange = new EventEmitter();
      
     }
  
  @Input() counter:any
    //  get counter(){

    //      return this.count; 
    //  }
  
    ngOnInit(){
      this.counterChange.emit(this.counter);
    }
     increment(){

         this.counter = this.counter+1; 
         this.counterChange.emit(this.counter);
     }

     decrement(){
         this.counter = this.counter - 1; 
         this.counterChange.emit(this.counter);
     }
}
