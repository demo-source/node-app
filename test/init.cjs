const { symlink } = require('@nodutilus/fs')
const app = async () => {
  await symlink('src', 'test/node_modules/node-app/src')
  await symlink('package.json', 'test/node_modules/node-app/package.json')
}

app().catch(console.error)
