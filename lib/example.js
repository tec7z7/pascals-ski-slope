class Example {
  static getNum(col, row) {
    if (col == 0 || col == row)
      return 1

    return this.getNum(col-1, row-1) + this.getNum(col, row-1)
  }

  static drawTree(total_rows) {
    // Variable to store rows of column values we collect.
    let lines = []
    // While we have not reached the total_rows required to render.
    for(let curr_row = 0; curr_row <= total_rows; curr_row++) {
      // While we still have columns in this row to display.
      for(let curr_col = 0; curr_col <= curr_row; curr_col++) {
        lines.push(this.getNum(curr_col, curr_row))
      }
      // Print the contents of the row columns we just collected.
      console.log( lines.join(" ") )
      // Reset our lines array for the next row.
      lines = []
    }
  }

}

module.exports = Example
