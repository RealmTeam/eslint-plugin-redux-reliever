import espree from 'espree'
import fs from 'fs'

const config = {
  ecmaVersion: 7,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
}

const code = fs.readFileSync('./test_data/enforce-oftype-usage/invalid.js').toString()
try {
  console.log(JSON.stringify(espree.parse(code, config), null, 2)) // eslint-disable-line no-console
} catch (err) {
  console.error(err.toString()) // eslint-disable-line no-console
}
