/**
 * Created by j on 2016/7/15.
 */
import {Component, OnInit} from "angular2/core";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router, RouteParams} from "angular2/router";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";

@Component({
  template: `

    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
      <div>
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name"
          [ngFormControl]="myForm.controls['firstName']"
        >
          <!-- ngControl="firstName"
          [(ngModel)]="newcontact.firstName"
          required-->
        
      </div>
      <div>
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name"
          [ngFormControl]="myForm.controls['lastName']"
        >
          <!--ngControl="lastName"
          [(ngModel)]="newcontact.lastName"
          required-->
        
      </div>
      <div>
        <label for="phone">Phone Number: </label>
        <input type="text" id="phone"
          [ngFormControl]="myForm.controls['phone']"
        >
          <!--ngControl="phone"
          [(ngModel)]="newcontact.phone"
          required-->
        
      </div>
      <div>
        <label for="email">E-Mail: </label>
        <input type="text" id="email"
          [ngFormControl]="myForm.controls['email']"
        >
          <!--ngControl="email"
          [(ngModel)]="newcontact.email"
          required-->
        
      </div>
      <button type="submit" [disabled]="!myForm.valid">Create Contact</button>
    </form>
  `,
  providers: [ContactService],
  styles: [`
    label{
      display: inline-block;
      width: 140px;
    }
    
    input{
      width: 250px;
    }
    
    .ng-invalid{
      border: 1px solid red;
    }
  `]
})

export class NewContactComponent implements OnInit{
  //public passedLastName = "";
  //newcontact: Contact;
  myForm: ControlGroup;

  constructor(private _contactService: ContactService, private _router:Router, private _routeParams:RouteParams, private  _formBuilder: FormBuilder){}
/*
  OnAddContact(firstName, lastName, phone, email){
    let contact: Contact = {firstName: firstName, lastName: lastName, phone: phone, email: email};
    this._contactService.insertContact(contact);
    this._router.navigate(['Contacts']);
  }
*/
  onSubmit(value){
    this._contactService.insertContact(value);
    this._router.navigate(['Contacts']);
  }

  ngOnInit():any {
    //this.passedLastName = this._routeParams.get('lastName');
    //this.newcontact = {firstName:'', lastName: this._routeParams.get('lastName'), phone:'', email:''};

    this.myForm = this._formBuilder.group({
      'firstName': ['',Validators.required],
      'lastName': [this._routeParams.get('lastName'),Validators.required],
      'phone': ['',Validators.required],
      'email': ['',Validators.required]
    });
  }
}
