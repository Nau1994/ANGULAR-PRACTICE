import { Component,ElementRef ,ContentChild ,AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements AfterContentInit{
counter=0
@ContentChild("parentContent") parentContent:ElementRef|any

ngAfterContentInit(){
  this.parentContent.nativeElement.style.color='blue'
}

increase(){
  ++this.counter
}
decrease(){
  --this.counter
}
}
