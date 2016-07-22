/**
 * Created by j on 2016/7/22.
 */
import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: "child",
  template: `
    <h2>Child</h2>
    <p>Value entered in parent component: {{parentValue}}</p>
    <input type="text" #parentInput #childInput (keyup)="onChanged(childInput.value)"><br>
  `,
  inputs: ['parentValue:passedValue'],
  outputs: ['childChanged']
})

export class ChildComponent{
  parentValue: string;
  childChanged = new EventEmitter<string>();

  onChanged(value: string) {
    this.childChanged.emit(value);
  }
}
