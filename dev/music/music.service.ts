/**
 * Created by j on 2016/7/26.
 */
import {Injectable} from "angular2/core";
import {ALBUM} from "./mock-album";

@Injectable()
export class MusicService {
  getAlbum() {
    return Promise.resolve(ALBUM);
  }
}
