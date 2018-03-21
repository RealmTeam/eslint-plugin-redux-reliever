'use strict';

var handlers = {
  CallExpression: function CallExpression(node) {
    if (node.callee.type === 'MemberExpression') {
      return node.callee.property.name === 'ofType' || checkNode(node.callee);
    }
    return checkNode(node.callee);
  },
  ReturnStatement: function ReturnStatement(_ref) {
    var argument = _ref.argument;
    return checkNode(argument);
  },
  VariableDeclaration: function VariableDeclaration(_ref2) {
    var declarations = _ref2.declarations;
    return declarations.map(checkNode).filter(function (x) {
      return x;
    }).length > 0;
  },
  VariableDeclarator: function VariableDeclarator(_ref3) {
    var init = _ref3.init;
    return checkNode(init);
  },
  MemberExpression: function MemberExpression(_ref4) {
    var object = _ref4.object;
    return checkNode(object);
  },
  ExpressionStatement: function ExpressionStatement(_ref5) {
    var expression = _ref5.expression;
    return checkNode(expression);
  }
};

var checkNode = function checkNode(node) {
  if (handlers[node.type]) return handlers[node.type](node);
  return false;
};

module.exports = {
  create: function create(context) {
    return {
      MethodDefinition: function MethodDefinition(node) {
        if (!node.key.name.endsWith('Epic')) return;
        var nodes = node.value.body.body;

        var results = nodes.map(checkNode);
        var isValid = results.filter(function (x) {
          return x;
        }).length > 0;
        if (!isValid) {
          context.report(node, "This epic isn't calling 'ofType' at any point. You like infinite loops don't you?");
        }
      }
    };
  }
};