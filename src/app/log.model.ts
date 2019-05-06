

const insert = (arr, index, newItem) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index)
]

export default class Log  {
  data: Array<any> = [];
  allData: Array<any> = [];
  headers: Array<string> = [];
  allHeaders: Array<string> = [];
  errors: Array<any> = [];
  minMax: Array<object>;

  constructor(input) {
    this.headers = input.data[0];
    this.allHeaders = input.data[0];
    this.data  = input.data.slice(1);
    this.allData = input.data.slice(1);
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

  private getHeaderIndex(stringKey:string):number {
    return this.headers.findIndex( item => item === stringKey);
  }


  hideColumn(key:string) {
    const index = this.getHeaderIndex(key);

    this.headers = this.headers.filter( (val, i) => i !== index);

    this.data = this.data.map( (row) => {
      return row.filter( (val, i) => i !== index);
    })
  }

  showColumn(key:string) {
    const originalIndex = this.allHeaders.findIndex( k => k === key);
    this.headers = insert(this.headers, originalIndex, key);

    this.data = this.data.map( (row, k) => {
      return insert(row, originalIndex, this.allData[k][originalIndex]);
    })
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