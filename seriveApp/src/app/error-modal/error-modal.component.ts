import { Component, inject, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css'
})


export class ErrorModalComponent {
	errorBody: string="";
  // errorHead: string="";
  constructor(public activeModal:NgbActiveModal){

  }
}
