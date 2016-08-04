class Example {
  static render (text, variables) {
    return text.replace(/\{[^}]+\}/g, (item) => {
      const key = item.slice(1, -1)
      if (typeof variables[key] !== 'undefined') {
        return variables[key]
      } else {
        return item
      }
    })
  }
}

module.exports = Example
