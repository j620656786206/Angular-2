/**
 * Created by j on 2016/7/25.
 */
import {Component} from 'angular2/core';
import {CoverComponent} from "./music/album-cover.component";
import {InfoComponent} from "./music/album-info.component";
import {IntroComponent} from "./music/album-intro.component";

@Component({
  selector: 'music-app',
  template: `
    <div class="album-info">
      <div class="cover">
        <cover-app></cover-app>
      </div>
      <div class="info">
        <info-app></info-app>
      </div>
      <div class="intro">
        <intro-app></intro-app>
      </div>
      
    </div>
    
    `,
  directives: [CoverComponent, InfoComponent, IntroComponent],
  styleUrls: ["src/css/music.css"]
})

export class MusicComponent {

}
