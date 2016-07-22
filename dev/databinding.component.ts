/**
 * Created by j on 2016/7/12.
 */
import {Component} from 'angular2/core';

@Component({
  selector: 'data',
  template: `

      <h3 (click)="onSelect()" [class.clicked]="showDetail === true">{{contact.firstName}} {{contact.lastName}} </h3>
      
      <input [(ngModel)]="contact.firstName" type="text">
      
      <div *ngIf="showDetail === true">
        Phone Number: {{contact.phone}}
        <br>
        E-Mail: {{contact.email}}
      </div>
   `,
  styleUrls: ['src/css/mycomponent.css']
})

export class DataBindingComponent{
  public contact = {firstName: "Alex", lastName: "Yu", phone: "800-000-0000", email: "abc@gmail.com"};
  public showDetail = false;

  onSelect(){
    this.showDetail = true;
  }
}
