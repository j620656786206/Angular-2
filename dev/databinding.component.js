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
var DataBindingComponent = (function () {
    function DataBindingComponent() {
        this.contact = { firstName: "Alex", lastName: "Yu", phone: "800-000-0000", email: "abc@gmail.com" };
        this.showDetail = false;
    }
    DataBindingComponent.prototype.onSelect = function () {
        this.showDetail = true;
    };
    DataBindingComponent = __decorate([
        core_1.Component({
            selector: 'data',
            template: "\n\n      <h3 (click)=\"onSelect()\" [class.clicked]=\"showDetail === true\">{{contact.firstName}} {{contact.lastName}} </h3>\n      \n      <input [(ngModel)]=\"contact.firstName\" type=\"text\">\n      \n      <div *ngIf=\"showDetail === true\">\n        Phone Number: {{contact.phone}}\n        <br>\n        E-Mail: {{contact.email}}\n      </div>\n   ",
            styleUrls: ['src/css/mycomponent.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DataBindingComponent);
    return DataBindingComponent;
}());
exports.DataBindingComponent = DataBindingComponent;
//# sourceMappingURL=databinding.component.js.map