
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

  getMinMax(key){
    return {
      key: this.getHeaderForKey(key),
      min: this.getMin(key),
      max: this.getMax(key),
    }
  }


  sortByDesc(key) {
    return this.data.sort((a, b) => (b[key] > a[key]) ? 1 : -1)
  }

  sortByAsc(key) {
    return this.data.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
  }

  getColumn(key) {
    return this.data.map( item => item[key])
  }
  getMin(key) {
    return this.getColumn(key)
      .reduce((min, p) => p < min ? p : min)
  }

  getHeaderForKey(key) {
    return this.headers[key]
  }

  getMax(key) {
    return this.getColumn(key)
      .reduce((min, p) => p > min ? p : min)
  }
}