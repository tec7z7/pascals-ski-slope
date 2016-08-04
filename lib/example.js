class Example {
  static getNum(col, row) {
    if (col == 0 || col == row)
      return 1

    return this.getNum(col-1, row-1) + this.getNum(col, row-1)
  }

  static drawTree(row) {
    let line = ''
    let lines = []
    for(let i=0; i<=row; i++) {
      line += ' ' + this.getNum(i, row);
      if (row == i) {
        lines.push(line)
        line = '';
        this.drawTree(row-1)
      }
    }
    for(let j=lines.length-1; j>=0; j--) {
      console.log(lines[j])
    }
  }

}

module.exports = Example
