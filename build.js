import { execSync } from 'child_process'

const env = {
  NODE_ENV: 'test'
}
const encoding = 'utf8'

execSync('npx babel lib-sample -d cjs/lib-sample', { env, encoding })
execSync('npx babel test -d cjs/test', { env, encoding })
