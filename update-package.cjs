const { readFileSync, writeFileSync } = require('fs')
const pkg = readFileSync('package.json', 'utf-8')

writeFileSync('package.json', pkg.replace(/"module"/, '"commonjs"'))
process.on('exit', () => {
  writeFileSync('package.json', pkg)
})
