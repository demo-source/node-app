const { Test } = require('./src/example.js')

const test = new Test()
const result = test.getResult()

console.log(result)

module.exports = () => { console.log(result) }
