/**
 * Created by j on 2016/7/12.
 */
import {Component, OnInit} from 'angular2/core';
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";

@Component({
  selector: "contact-list",
  template: `
    <ul>
        <li *ngFor="#contact of contacts"
            (click)="onSelect(contact)" 
            [class.clicked]="selectedContact === contact"
         >
         {{contact.firstName}} {{contact.lastName | uppercase}}
        </li>
      </ul>
      <contact *ngIf="selectedContact !== null" [contact] = "selectedContact"></contact>
  `,
  directives: [ContactComponent],
  providers: [ContactService],
  styleUrls: ['src/css/contact-list.css']
})

export class ContactListComponent implements  OnInit{

  /*public contacts = [{firstName: "Alex", lastName: "Yu", phone: "800-000-0000", email: "abc@gmail.com"},
    {firstName: "Chris", lastName: "Yu", phone: "800-000-0000", email: "def@gmail.com"},
    {firstName: "Michael", lastName: "Yu", phone: "800-000-0000", email: "dfgfdg@gmail.com"},
    {firstName: "fdgfdg", lastName: "Yu", phone: "800-000-0000", email: "fgfdg@gmail.com"},];*/

  public contacts: Contact[];

  public selectedContact = null;

  constructor(private _contactService:ContactService){}

  onSelect(contact){
    this.selectedContact = contact;
  }

  getContact() {
    this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
  }

  ngOnInit():any {
    this.getContact();
  }
}
