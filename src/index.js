const babel = require("@babel/core");

module.exports = function () {
  const LogVisitor = {
    CallExpression(path, state) {
      const { callee, arguments } = path.node;

      if (callee.object && callee.object.name === "console") {
        const styles = state.opts.types[callee.property.name];

        if (styles) {
          let parsedStylesToString = "";
          let divider;

          Object.keys(styles).forEach((key) => {
            if (key === "divider") {
              divider = styles[key];
            } else {
              parsedStylesToString += `${key}: ${styles[key]}; `;
            }
          });

          const str = arguments
            .map((arg) => {
              if (arg.type === "StringLiteral") {
                return arg.value;
              }
            })
            .join(divider || " ");

          const newArgs = [
            babel.types.stringLiteral(`%c${str}`),
            babel.types.stringLiteral(parsedStylesToString),
          ];
          path.node.arguments = newArgs;
          path.node.callee.property.name = "log";
        }
      }
    },
  };

  return { visitor: LogVisitor };
};
