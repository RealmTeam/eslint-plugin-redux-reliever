const handlers = {
  CallExpression: node => {
    if (node.callee.type === 'MemberExpression') {
      return node.callee.property.name === 'ofType' || checkNode(node.callee)
    }
    return checkNode(node.callee)
  },
  ReturnStatement: ({argument}) => checkNode(argument),
  VariableDeclaration: ({declarations}) => declarations.map(checkNode).filter(x => x).length > 0,
  VariableDeclarator: ({init}) => checkNode(init),
  MemberExpression: ({object}) => checkNode(object),
  ExpressionStatement: ({expression}) => checkNode(expression)
}

const checkNode = node => {
  if (handlers[node.type]) return handlers[node.type](node)
  return false
}

export default {
  create: context => ({
    MethodDefinition: node => {
      if (!node.key.name.endsWith('Epic')) return
      const {value: {body: {body: nodes}}} = node
      const results = nodes.map(checkNode)
      const isValid = results.filter(x => x).length > 0
      if (!isValid) {
        context.report(node, "This epic isn't calling 'ofType' at any point. You like infinite loops don't you?")
      }
    }
  })
}
