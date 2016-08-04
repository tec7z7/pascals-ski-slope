const { expect } = require('chai')
const Example = require('../../lib/example')

describe('checking pyramid', () => {
  it('when column is 1 and row is 1', () => {
    expect(Example.getNum(0, 0)).to.eq(1)
  })
  it('when column is 0 and row is 1', () => {
    expect(Example.getNum(0, 1)).to.eq(1)
  })
  it('when column is 2 and row is 3', () => {
    expect(Example.getNum(1, 2)).to.eq(2)
  })
  it('when column is 3 and row is 6', () => {
    expect(Example.getNum(2, 5)).to.eq(10)
  })
  it('when row is 5', () => {
    var start = new Date().getTime();
    Example.drawTree(25)
    var stop = new Date().getTime();
    console.log(stop-start);
  })
})
