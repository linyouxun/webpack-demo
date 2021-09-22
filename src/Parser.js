/** Parser.js */

class Parser {
  parse(code, initialState) {
    var ast = acornParse.parse(code);
    this.state = initialState;
    this.walkStatements(ast.body);
    return this.state;
  }

  walkStatements(statements) {
    for (var i = 0; i < statements.length; i++) {
      const statement = statements[i];
      this.walkStatement(statement);
    }
  }

  walkStatement(statement) {
    this.walkExpression(statement.expression);
  }

  walkExpression(expression) {
    switch (expression.type) {
      case "CallExpression": {
        this.walkCallExpression(expression);
      }
    }
  }

  walkCalExpression(expression) {}
}
