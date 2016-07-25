/**
 * Created by j on 2016/7/25.
 */
import {Component} from 'angular2/core';
import {CoverComponent} from "./music/album-cover.component";
import {InfoComponent} from "./music/album-info.component";

@Component({
  selector: 'music-app',
  template: `
    <div class="album-info">
      <div class="cover">
        <cover-app></cover-app>
      </div>
      <info-app></info-app>
    </div>
    
    `,
  directives: [CoverComponent, InfoComponent],
  styleUrls: ["src/css/music.css"]
})

export class MusicComponent {

}
