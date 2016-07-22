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
var test_component_1 = require("./test.component");
var MyComponentComponent = (function () {
    function MyComponentComponent() {
    }
    MyComponentComponent.prototype.ngOnInit = function () {
        this.name = 'Alex';
    };
    MyComponentComponent = __decorate([
        core_1.Component({
            selector: 'my-component',
            template: "\n      Hi I'm <span [style.color]=\"inputElement.value === 'yes' ? 'red' : '' \">{{name}}</span> and this is my very first Angular 2 components! <span [class.is-awesome] = \"inputElement.value == 'yes' \">It's awesome! </span>\n      <br>\n      <br>\n      is it awesome?\n      <input type=\"text\" #inputElement (keyup)=\"0\">\n      <br><br>\n      <button [disabled] = \"inputElement.value !== 'yes' \">only enabled if 'yes' was entered</button>\n      <test></test>\n   ",
            styleUrls: ['src/css/mycomponent.css'],
            directives: [test_component_1.TestComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponentComponent);
    return MyComponentComponent;
}());
exports.MyComponentComponent = MyComponentComponent;
//# sourceMappingURL=my-component.component.js.map