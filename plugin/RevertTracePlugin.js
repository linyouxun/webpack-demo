function RevertTracePlugin() {}

RevertTracePlugin.prototype.apply = function (compiler) {
  compiler.hooks.thisCompilation.tap(
    "ReverTracePlugin",
    function (compilation) {
      compilation.hooks.buildModule.tap("ReverTracePlugin", function (module) {
        const stack = [];
        let current = module;
        while (current.issuer) {
          stack.push(current.issuer.rawRequest);
          current = current.issuer;
        }
        if (stack.length > 0) {
          console.group(`资源${module.rawRequest}引用链`);
          console.log(stack.join("\r\n"));
          console.groupEnd();
          console.log("---------------");
        }
      });
    }
  );
};

module.exports = RevertTracePlugin;
