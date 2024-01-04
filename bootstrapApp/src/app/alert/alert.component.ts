import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() alerts: any[]=[];
  close(alert: any) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}
}
