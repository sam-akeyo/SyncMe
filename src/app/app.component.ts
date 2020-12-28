import { Component } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  template: '<ejs-schedule height = "850" width = "1250" [eventSettings] = "eventObject" [selectedDate]="setDate" ></ejs-schedule>', // took out: [currentView]="setView"
  // templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'calendar';
  //public setView: View = 'Month';
  public setDate: Date = new Date(2020, 1, 1);
  public eventObject: EventSettingsModel = {
    dataSource: [{
      Subject: "Testing", 
      StartTime: new Date(2020,0,17,4,0),
      EndTime: new Date(2020,0,17,6,0),
      IsAllDay: true
    }]
  }

}
