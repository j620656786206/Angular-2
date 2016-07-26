/**
 * Created by j on 2016/7/25.
 */
import {Component} from 'angular2/core';
import {CoverComponent} from "./music/album-cover.component";
import {InfoComponent} from "./music/album-info.component";
import {IntroComponent} from "./music/album-intro.component";
import {SearchComponent} from "./music/search.component";

@Component({
  selector: 'music-app',
  template: `
    <div class="top">
      <search-app></search-app>
    </div>
    <div class="album-info">
      <div class="cover">
        <cover-app></cover-app>
      </div>
      <div class="info">
        <info-app></info-app>
      </div>
    </div>
    <div class="intro">
        <intro-app></intro-app>
    </div>
    
    `,
  directives: [CoverComponent, InfoComponent, IntroComponent, SearchComponent],
  styleUrls: ["src/css/music.css"]
})

export class MusicComponent {

}
