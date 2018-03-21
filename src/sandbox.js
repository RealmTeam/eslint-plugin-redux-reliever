import espree from 'espree'

const config = {
  ecmaVersion: 6,
  ecmaFeatures: {
    jsx: true
  }
}

const code = ['class X {', '   someEpic(action$) {', '       return action$', '   }', '}']

console.log(JSON.stringify(espree.parse(code.join('\n'), config), null, 2))
