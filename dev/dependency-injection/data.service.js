"use strict";
var DataService = (function () {
    function DataService() {
        this._data = ['Milk', 'Bread', 'Sugar'];
    }
    DataService.prototype.getRandomData = function () {
        return this._data[Math.floor(Math.random() * this._data.length)];
    };
    DataService.prototype.insertData = function (data) {
        this._data.push(data);
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map