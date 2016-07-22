/**
 * Created by j on 2016/7/20.
 */
import {Component} from 'angular2/core';
import {HTTPTestService} from "./http-test.service";

@Component({
  selector: 'http-test',
  template: `
    <button (click)="onTestGet()" >Test Get Request</button><br>
    <p>Output:{{getData}}</p>
    <button (click)="onTestPost()">Test Post Request</button><br>
    <p>Output:{{postData}}</p>
   `,
  providers: [HTTPTestService]
})

export class HTTPTestComponent{
  getData: string;
  postData: string;

  constructor(private _httpService: HTTPTestService) {}

  onTestGet() {
    this._httpService.getCurrentTime()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")
      );
  }

  onTestPost() {
    this._httpService.postJSON()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")
      )
  }
}
