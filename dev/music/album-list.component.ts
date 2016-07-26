/**
 * Created by j on 2016/7/26.
 */
import {Component, OnInit} from 'angular2/core';
import {Album} from "./album";
import {MusicService} from "./music.service";

@Component({
  selector: 'album-list',
  template: `
    <ul>
      <li>
        {{albums.albumTitle}} {{albums.albumSinger}}
      </li>
    </ul>
    `,
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
