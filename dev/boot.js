"use strict";
var browser_1 = require('angular2/platform/browser');
var app_component_1 = require("./app.component");
var router_1 = require("angular2/router");
var http_1 = require("angular2/http");
var data_service_1 = require("./dependency-injection/data.service");
browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, data_service_1.DataService]);
//# sourceMappingURL=boot.js.map