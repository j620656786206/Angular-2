/**
 * Created by j on 2016/7/26.
 */
import {Component} from 'angular2/core';

@Component({
  selector: 'search-app',
  template: `
    <div class="row">
      <div class="col-lg-6">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="album title, genre, singer name...">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">search</button>
          </span>
        </div><!-- /input-group -->
      </div><!-- /.col-lg-6 -->
    </div><!-- /.row -->
    `,
})

export class SearchComponent {

}
