const path = require("path");
const fs = require("fs");
const { RawSource } = require("webpack-sources");

function CopyPlugin(options) {
  this.options = options || {};
}

CopyPlugin.prototype.apply = function (compiler) {
  const basePath = compiler.options.context;
  compiler.hooks.thisCompilation.tap("copy-plugin", (compilation) => {
    const { from, to } = this.options;
    const missingParams = [!from && "from", !to && "to"].filter(Boolean);
    if (missingParams.length > 0) {
      console.error(
        `copy plugin missing parameter: ${missingParams.join(", ")}`
      );
    }

    compilation.hooks.additionalAssets.tapAsync("copy-plugin-2", (cb) => {
      fs.readdir(from, "utf-8", (err, files) => {
        const fileMap = {};
        files.forEach((file) => {
          const pathname = path.resolve(basePath, `./src/${file}`);
          const pathname2 = `${to}/${file}`; // path.resolve(basePath, `./dist/${file}`);

          if (fs.existsSync(pathname) && fs.statSync(pathname).isFile()) {
            const fileData = fs.readFileSync(pathname, "utf-8");
            // fileMap[pathname] = new RawSource(fileData);
            compilation.emitAsset(pathname2, new RawSource(fileData), {});
          }
        });

        cb();
      });
    });
  });
};

module.exports = CopyPlugin;
