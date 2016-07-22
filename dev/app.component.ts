import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";
import {DataBindingComponent} from "./databinding.component"
import {MultiComponent} from "./multiple.components";
import {ContactListComponent} from "./contacts/contact-list.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {NewContactComponent} from "./contacts/new-contact.component";
import {HTTPTestComponent} from "./http/http-test.component";
import {ParentComponent} from "./input-output/parent.component";
import {Component1Component} from "./dependency-injection/component1.component";
import {Component2Component} from "./dependency-injection/component2.component";

@Component({
    selector: 'my-app',
    template: `
        <!-- <my-component></my-component> -->
        <!-- <data></data> -->
        <!-- <multi></multi> -->
        <!-- <contact-list></contact-list> -->
        <header>
          <nav>
            <a [routerLink]="['Contacts']">Contacts</a>
            <a [routerLink]="['NewContact']">New Contact</a>
          </nav>
        </header>
        <div class="main">
          <router-outlet></router-outlet>
          <http-test></http-test>
          
          <!--<div class="pipes">
            <h2>Date Pipe</h2>
            <div>
              {{date | date:'short'}}
            </div>
            <h2>Number Pipe</h2>
            <div>
              {{4.566 | number:'1.2-4'}}
            </div>
            <h2>Currency Pipe</h2>
            <div>
              {{15.99 | currency:'EUR':true:'1.2-4'}}
            </div>
            <h2>Stateful Pipe</h2>
            <div>
              {{randomData | async}}
            </div>
          </div>-->
          
          <parent></parent>
          <my-component-1></my-component-1>
          <my-component-2></my-component-2>
        </div>
    `,
    directives: [MyComponentComponent,DataBindingComponent, MultiComponent, ContactListComponent, HTTPTestComponent, ParentComponent, Component1Component, Component2Component, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
  {path: '/newcontact', name: 'NewContact', component: NewContactComponent},
  {path: '/newcontact/:lastName', name: 'NewContactFromContact', component: NewContactComponent}
])
export class AppComponent {

  /*date = new Date;
  randomData = new Promise((resolve,reject) => {
    setTimeout(() => resolve('Random Data!'), 1000)
  });*/

}
