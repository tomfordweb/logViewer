export default class Heatmap  {
  columns: Array<number> = [];

  addColumn(data) {
    console.log('adding a column', data);
    this.columns = [
      ...this.columns,
      ...data
    ];


    console.log(this.columns);
  }


  removeColumn(data) {
    this.columns = this.columns.filter(col => col !== data);
  }
}