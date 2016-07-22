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
var MultiComponent = (function () {
    function MultiComponent() {
        this.contacts = [{ firstName: "Alex", lastName: "Yu", phone: "800-000-0000", email: "abc@gmail.com" },
            { firstName: "Chris", lastName: "Yu", phone: "800-000-0000", email: "def@gmail.com" },
            { firstName: "Michael", lastName: "Yu", phone: "800-000-0000", email: "dfgfdg@gmail.com" },
            { firstName: "fdgfdg", lastName: "Yu", phone: "800-000-0000", email: "fgfdg@gmail.com" },];
        this.selectedContact = {};
    }
    MultiComponent.prototype.onSelect = function (contact) {
        this.selectedContact = contact;
    };
    MultiComponent = __decorate([
        core_1.Component({
            selector: 'multi',
            template: "\n      <ul>\n        <li *ngFor=\"#contact of contacts\"\n            (click)=\"onSelect(contact)\" \n            [class.clicked]=\"showDetail === true\"\n            >\n            {{contact.firstName}} {{contact.lastName}}\n        </li>\n      </ul>\n      \n      <input [(ngModel)]=\"selectedContact.firstName\" type=\"text\">\n      <div>\n        Phone Number: {{selectedContact.phone}}<br>\n        E-Mail: {{selectedContact.email}}\n      </div>\n   ",
            styleUrls: ['src/css/mycomponent.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MultiComponent);
    return MultiComponent;
}());
exports.MultiComponent = MultiComponent;
//# sourceMappingURL=multiple.components.js.map