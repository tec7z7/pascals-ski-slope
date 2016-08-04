const { expect } = require('chai')
const Example = require('../../lib/example')

describe('Example', () => {
  it('tests something', () => {
    expect(Example.render('{foo}', {
      foo: 'bar',
    })).to.eq('bar')
  })
})
