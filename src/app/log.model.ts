
export default class Log  {
  data: Array<any> = [];
  headers: Array<string> = [];
  errors: Array<any> = [];
  minMax: Array<object>;

  constructor(input) {
    this.headers = input.data[0];
    this.data  = input.data.slice(1);
    this.minMax = this.getMinMaxAll();
  }

  getMinMaxAll() {
    return this.headers.map( (key, index) => this.getMinMax(index));
  }

  getMinMax(key) {
    return {
      key,
      min: this.getMin(key),
      max: this.getMax(key),
    }
  }

  sortByDesc(key) {
    console.log('sort by desc', key);
    return this.data.sort((a, b) => (b[key] > a[key]) ? 1 : -1)
  }

  sortByAsc(key) {
    console.log('sort by asc', key);
    return this.data.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
  }

  getMin(key) {
    return this.data.reduce((min, p) => p[key] < min ? p[key] : min, this.data[key]);
  }

  getMax(key) {
    return this.data.reduce((max, p) => p[key] > max ? p[key] : max, this.data[key]);
  }
}