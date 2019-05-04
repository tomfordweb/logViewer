

export interface Deserializable {
  deserialize(input: any): this;

}

export default class Log implements Deserializable {
  data: Array<any>
  headers: Array<string>;
  errors?: Array<any>;
  minMax?: object;

  constructor(input) {
    console.log(input);
    this.data  = input.data.slice(1);
    this.headers = input.data[0];
    this.minMax = this.getMinMaxAll();
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  getMinMaxAll() {
    return this.headers.map( (key) => this.getMinMax(key));
  }

  getMinMax(key) {
    return {
      key,
      min: this.getMin(key),
      max: this.getMax(key),
    }
  }

  sortByDesc(key) {
    console.log('sort by', key);
    return this.data.sort((a, b) => (b[key] > a[key]) ? 1 : -1)
  }

  sortByAsc(key) {
    console.log('sort by', key);
    return this.data.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
  }

  getMin(key) {
    return this.data.reduce((min, p) => p[key] < min ? p[key] : min, this.data[0][key]);
  }

  getMax(key) {
    return this.data.reduce((max, p) => p[key] > max ? p[key] : max, this.data[0][key]);
  }
}