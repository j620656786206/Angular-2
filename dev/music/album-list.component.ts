/**
 * Created by j on 2016/7/26.
 */
import {Component, OnInit} from 'angular2/core';
import {Album} from "./album";
import {MusicService} from "./music.service";
import {InfoComponent} from "./album-info.component";

@Component({
  selector: 'album-list',
  template: `
    <ul>
      <li>
        {{Album.albumTitle}} {{Album.albumSinger}}
      </li>
    </ul>
    <info-app></info-app>
    `,
  directives:[InfoComponent],
  providers:[MusicService]
})

export class AlbumListComponent implements OnInit{
  public albums: Album[];
  public selectedalbum = null;

  constructor(private _musicService:MusicService){}

  onSelectAlbum(album) {this.selectedalbum = album;}

  getAlbum() {
    this._musicService.getAlbum().then((albums: Album[]) => this.albums = albums);
  }

  ngOnInit():any {
    this.getAlbum();
  }
}
