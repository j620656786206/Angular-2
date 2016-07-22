"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var my_component_component_1 = require("./my-component.component");
var databinding_component_1 = require("./databinding.component");
var multiple_components_1 = require("./multiple.components");
var contact_list_component_1 = require("./contacts/contact-list.component");
var router_1 = require("angular2/router");
var new_contact_component_1 = require("./contacts/new-contact.component");
var http_test_component_1 = require("./http/http-test.component");
var parent_component_1 = require("./input-output/parent.component");
var component1_component_1 = require("./dependency-injection/component1.component");
var component2_component_1 = require("./dependency-injection/component2.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <!-- <my-component></my-component> -->\n        <!-- <data></data> -->\n        <!-- <multi></multi> -->\n        <!-- <contact-list></contact-list> -->\n        <header>\n          <nav>\n            <a [routerLink]=\"['Contacts']\">Contacts</a>\n            <a [routerLink]=\"['NewContact']\">New Contact</a>\n          </nav>\n        </header>\n        <div class=\"main\">\n          <router-outlet></router-outlet>\n          <http-test></http-test>\n          \n          <!--<div class=\"pipes\">\n            <h2>Date Pipe</h2>\n            <div>\n              {{date | date:'short'}}\n            </div>\n            <h2>Number Pipe</h2>\n            <div>\n              {{4.566 | number:'1.2-4'}}\n            </div>\n            <h2>Currency Pipe</h2>\n            <div>\n              {{15.99 | currency:'EUR':true:'1.2-4'}}\n            </div>\n            <h2>Stateful Pipe</h2>\n            <div>\n              {{randomData | async}}\n            </div>\n          </div>-->\n          \n          <parent></parent>\n          <my-component-1></my-component-1>\n          <my-component-2></my-component-2>\n        </div>\n    ",
            directives: [my_component_component_1.MyComponentComponent, databinding_component_1.DataBindingComponent, multiple_components_1.MultiComponent, contact_list_component_1.ContactListComponent, http_test_component_1.HTTPTestComponent, parent_component_1.ParentComponent, component1_component_1.Component1Component, component2_component_1.Component2Component, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent, useAsDefault: true },
            { path: '/newcontact', name: 'NewContact', component: new_contact_component_1.NewContactComponent },
            { path: '/newcontact/:lastName', name: 'NewContactFromContact', component: new_contact_component_1.NewContactComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map