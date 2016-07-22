/**
 * Created by j on 2016/7/12.
 */
import {Component} from 'angular2/core';

@Component({
  selector: 'multi',
  template: `
      <ul>
        <li *ngFor="#contact of contacts"
            (click)="onSelect(contact)" 
            [class.clicked]="showDetail === true"
            >
            {{contact.firstName}} {{contact.lastName}}
        </li>
      </ul>
      
      <input [(ngModel)]="selectedContact.firstName" type="text">
      <div>
        Phone Number: {{selectedContact.phone}}<br>
        E-Mail: {{selectedContact.email}}
      </div>
   `,
  styleUrls: ['src/css/mycomponent.css']
})

export class MultiComponent{
  public contacts = [{firstName: "Alex", lastName: "Yu", phone: "800-000-0000", email: "abc@gmail.com"},
                    {firstName: "Chris", lastName: "Yu", phone: "800-000-0000", email: "def@gmail.com"},
                    {firstName: "Michael", lastName: "Yu", phone: "800-000-0000", email: "dfgfdg@gmail.com"},
                    {firstName: "fdgfdg", lastName: "Yu", phone: "800-000-0000", email: "fgfdg@gmail.com"},];
  public selectedContact = {};

  onSelect(contact){
    this.selectedContact = contact;
  }
}
