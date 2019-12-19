const { remove, readJSON, writeJSON } = require('@nodutilus/fs')
const { execSync } = require('child_process')
const app = async () => {
  const command = 'npx babel src -d test/node_modules/node-app-babel/src'
  const packageJSON = await readJSON('package.json')

  await remove('test/node_modules/node-app-babel')

  console.log(command)
  execSync(command, {
    env: {
      NODE_ENV: 'test'
    }
  })

  packageJSON.type = 'commonjs'
  await writeJSON('test/node_modules/node-app-babel/package.json', packageJSON)
}

app().catch(console.error)
