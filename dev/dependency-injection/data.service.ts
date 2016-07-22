/**
 * Created by j on 2016/7/22.
 */

export class DataService {
  private _data=['Milk','Bread','Sugar'];

  getRandomData() {
    return this._data[Math.floor(Math.random() * this._data.length)];
  }

  insertData(data: string) {
    this._data.push(data);
  }
}
