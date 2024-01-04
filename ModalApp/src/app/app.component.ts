import { Component } from '@angular/core';
import { FormControl, FormGroup,NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponentComponent } from './modal-component/modal-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message:any;
  reactiveForm=new FormGroup({
    reactiveMessage:new FormControl()
  })

  constructor(private modalService:NgbModal){}

  clickOk(form:NgForm){
    if(form.value.message.length>0){
      console.log(form.value.message)
      const modalRef=this.modalService.open(ModalComponentComponent)
      modalRef.componentInstance.message="Template: "+form.value.message
      form.resetForm()
      
    }
    
  }

  clickROk(){
    console.log(this.reactiveForm.value)
    if(this.reactiveForm.value.reactiveMessage.length>0){
      const modalRef=this.modalService.open(ModalComponentComponent)
      modalRef.componentInstance.message="Reactive: "+this.reactiveForm.value.reactiveMessage
    }
  }
}
