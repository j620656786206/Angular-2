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
var router_1 = require("angular2/router");
var ContactComponent = (function () {
    function ContactComponent(_router) {
        this._router = _router;
        this.contact = null;
    }
    ContactComponent.prototype.onCreateNew = function () {
        this._router.navigate(['NewContactFromContact', { lastName: this.contact.lastName }]);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: "contact",
            template: "\n    \n    <div>\n      <div>\n        <label for=\"first-name\">First Name:</label>\n        <input [(ngModel)]=\"contact.firstName\" type=\"text\" id=\"first-name\">\n      </div>\n      <div>\n        <label for=\"last-name\">Last Name:</label>\n        <input [(ngModel)]=\"contact.lastName\" type=\"text\" id=\"last-name\">\n      </div>\n      <div>\n        <label for=\"phone\">Phone Number: </label>\n        <input [(ngModel)]=\"contact.phone\" type=\"text\" id=\"phone\">\n      </div>\n      <div>\n        <label for=\"email\">E-Mail: </label>\n        <input [(ngModel)]=\"contact.email\" type=\"text\" id=\"email\">\n      </div>\n      <button (click)=\"onCreateNew()\">Create new Contact from this contact</button>\n    </div>\n  ",
            inputs: ["contact"],
            styles: ["\n    label{\n      display: inline-block;\n      width: 140px;\n    }\n    \n    input{\n      width: 250px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map