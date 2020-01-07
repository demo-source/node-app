import { execSync } from 'child_process'

const env = {
  NODE_ENV: 'test'
}

execSync('npx babel lib-sample -d cjs/lib-sample', { env })
execSync('npx babel test -d cjs/test', { env })
