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
var album_cover_component_1 = require("./music/album-cover.component");
var album_info_component_1 = require("./music/album-info.component");
var MusicComponent = (function () {
    function MusicComponent() {
    }
    MusicComponent = __decorate([
        core_1.Component({
            selector: 'music-app',
            template: "\n    <div class=\"album-info\">\n      <div class=\"cover\">\n        <cover-app></cover-app>\n      </div>\n      <info-app></info-app>\n    </div>\n    \n    ",
            directives: [album_cover_component_1.CoverComponent, album_info_component_1.InfoComponent],
            styleUrls: ["src/css/music.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], MusicComponent);
    return MusicComponent;
}());
exports.MusicComponent = MusicComponent;
//# sourceMappingURL=music.component.js.map