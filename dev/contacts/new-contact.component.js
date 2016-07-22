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
var core_1 = require("angular2/core");
var contact_service_1 = require("./contact.service");
var router_1 = require("angular2/router");
var common_1 = require("angular2/common");
var NewContactComponent = (function () {
    function NewContactComponent(_contactService, _router, _routeParams, _formBuilder) {
        this._contactService = _contactService;
        this._router = _router;
        this._routeParams = _routeParams;
        this._formBuilder = _formBuilder;
    }
    NewContactComponent.prototype.onSubmit = function (value) {
        this._contactService.insertContact(value);
        this._router.navigate(['Contacts']);
    };
    NewContactComponent.prototype.ngOnInit = function () {
        this.myForm = this._formBuilder.group({
            'firstName': ['', common_1.Validators.required],
            'lastName': [this._routeParams.get('lastName'), common_1.Validators.required],
            'phone': ['', common_1.Validators.required],
            'email': ['', common_1.Validators.required]
        });
    };
    NewContactComponent = __decorate([
        core_1.Component({
            template: "\n\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n      <div>\n        <label for=\"first-name\">First Name:</label>\n        <input type=\"text\" id=\"first-name\"\n          [ngFormControl]=\"myForm.controls['firstName']\"\n        >\n          <!-- ngControl=\"firstName\"\n          [(ngModel)]=\"newcontact.firstName\"\n          required-->\n        \n      </div>\n      <div>\n        <label for=\"last-name\">Last Name:</label>\n        <input type=\"text\" id=\"last-name\"\n          [ngFormControl]=\"myForm.controls['lastName']\"\n        >\n          <!--ngControl=\"lastName\"\n          [(ngModel)]=\"newcontact.lastName\"\n          required-->\n        \n      </div>\n      <div>\n        <label for=\"phone\">Phone Number: </label>\n        <input type=\"text\" id=\"phone\"\n          [ngFormControl]=\"myForm.controls['phone']\"\n        >\n          <!--ngControl=\"phone\"\n          [(ngModel)]=\"newcontact.phone\"\n          required-->\n        \n      </div>\n      <div>\n        <label for=\"email\">E-Mail: </label>\n        <input type=\"text\" id=\"email\"\n          [ngFormControl]=\"myForm.controls['email']\"\n        >\n          <!--ngControl=\"email\"\n          [(ngModel)]=\"newcontact.email\"\n          required-->\n        \n      </div>\n      <button type=\"submit\" [disabled]=\"!myForm.valid\">Create Contact</button>\n    </form>\n  ",
            providers: [contact_service_1.ContactService],
            styles: ["\n    label{\n      display: inline-block;\n      width: 140px;\n    }\n    \n    input{\n      width: 250px;\n    }\n    \n    .ng-invalid{\n      border: 1px solid red;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_1.RouteParams, common_1.FormBuilder])
    ], NewContactComponent);
    return NewContactComponent;
}());
exports.NewContactComponent = NewContactComponent;
//# sourceMappingURL=new-contact.component.js.map