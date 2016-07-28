/**
 * Created by j on 2016/7/25.
 */
import {Component} from 'angular2/core';
import {Album} from "./album";

@Component({
  selector: 'info-app',
  template: `
      <!--<label>Album Title</label><br>
      <label>Album Singer</label><br>
      <label>Release Date</label><br>-->
      <input [(ngModel)]="selectedalbum.albumTitle" type="text">
      <div>
        album singer: {{selectedalbum.albumSinger}} <br>
        Release Date: {{selectedalbum.releaseDate}}
      </div>
    `,
  inputs:["album"]
})

export class InfoComponent {
  public album: Album = null;
}
