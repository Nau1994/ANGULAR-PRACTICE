import { Component, ElementRef, ViewChild ,AfterViewInit, QueryList, ViewChildren} from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'ViewChild';
  // @ViewChild('highlight') marker:ElementRef|any
  @ViewChildren('highlight') markers:QueryList<ElementRef>|any

  @ViewChild('childCounter') childCounterComp:CounterComponent|any

  ngAfterViewInit(){
    console.log(this.markers)
    // this.marker.nativeElement.style.color='red'

    // this.markers.first.nativeElement.style.color='red'
    // this.markers.last.nativeElement.setAttribute('style','color:blue')

    this.markers._results[0].nativeElement.style.color='green'
    this.markers._results[1].nativeElement.style.color='red'
    this.markers._results[2].nativeElement.setAttribute('style','color:orange')

  }

  inc(){
    this.childCounterComp.increase()
  }

  dec(){
    this.childCounterComp.decrease()
  }
}
