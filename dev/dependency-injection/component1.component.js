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
var data_service_1 = require("./data.service");
var Component1Component = (function () {
    function Component1Component(_dataService) {
        this._dataService = _dataService;
    }
    Component1Component.prototype.onGetData = function () {
        this.data = this._dataService.getRandomData();
    };
    Component1Component.prototype.onAddItem = function (data) {
        this._dataService.insertData(data);
    };
    Component1Component = __decorate([
        core_1.Component({
            selector: "my-component-1",
            template: "\n    <h1>Component 1</h1>\n    <div>\n      <button (click)=\"onGetData()\">Get Random Data</button>\n      <p>Random Data: {{data}}</p>\n      <input type=\"text\" #input>\n      <button (click)=\"onAddItem(input.value)\">Add</button>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], Component1Component);
    return Component1Component;
}());
exports.Component1Component = Component1Component;
//# sourceMappingURL=component1.component.js.map