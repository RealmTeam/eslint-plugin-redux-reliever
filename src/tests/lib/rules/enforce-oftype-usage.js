import {RuleTester} from 'eslint'
import fs from 'fs'
import rule from '../../../rules/enforce-oftype-usage'

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6
  }
})

tester.run('enforce-oftype-usage', rule, {
  valid: [fs.readFileSync('./test_data/enforce-oftype-usage/valid.js').toString()],
  invalid: [
    {
      code: fs.readFileSync('./test_data/enforce-oftype-usage/invalid.js').toString(),
      errors: [{message: "This epic isn't calling 'ofType' at any point. You like infinite loops don't you?"}]
    }
  ]
})
