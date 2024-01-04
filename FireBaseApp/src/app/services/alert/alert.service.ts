import { Injectable, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../../shared/ngb-alert-modal-component/alert-modal.component';
import { CustomAlertModalComponent } from '../../shared/custome-alert-modal-component/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private modalService:NgbModal
    // ,private vcr:ViewContainerRef
    ) { }

  showErrorAlertUsingNgbModal(message:string){
    const modalRef=this.modalService.open(AlertModalComponent)
    modalRef.componentInstance.message=message
  }

  showErrorAlertUsingCustomeModal(message:string,vcr:ViewContainerRef){
    let compRef=vcr.createComponent(CustomAlertModalComponent)
    compRef.instance.message=message
    let closeSub=compRef.instance.close.subscribe(()=>{
      closeSub.unsubscribe()
      vcr.clear()
    })
  }
}
