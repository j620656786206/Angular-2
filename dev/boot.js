"use strict";
var browser_1 = require('angular2/platform/browser');
var router_1 = require("angular2/router");
var http_1 = require("angular2/http");
var data_service_1 = require("./dependency-injection/data.service");
var music_component_1 = require("./music.component");
browser_1.bootstrap(music_component_1.MusicComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, data_service_1.DataService]);
//# sourceMappingURL=boot.js.map