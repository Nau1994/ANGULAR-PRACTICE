import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'custome-alert-modal-component',
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.css'
})
export class CustomAlertModalComponent {
constructor(){}

@Input() message:string=''
@Output() close = new EventEmitter<void>();

onCloseClick(){
  this.close.emit();
}
}
