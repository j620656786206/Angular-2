/**
 * Created by j on 2016/7/22.
 */
import {Component} from 'angular2/core';
import {ChildComponent} from "./child.component";

@Component({
  selector: "parent",
  template: `
    <div class="parent">
      <h1>Parent</h1>
      <p>Value ented in child component: {{childValue}}</p>
      <input type="text" #parentInput (keyup)="0"><br>
      <div class="child">
        <child [passedValue]="parentInput.value" (childChanged)="childValue = $event"></child>
      </div>
    </div>
  `,
  directives: [ChildComponent]
})

export class ParentComponent{
  childValue: string;
}
