import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() value:any
  @Output() valueChange=new EventEmitter()
  onInput(event:any){
    console.log(event)
    this.value=event.target.value
    this.valueChange.emit(this.value)
  }


}
