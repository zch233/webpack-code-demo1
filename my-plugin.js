
const RawSource = require('webpack-sources/lib/RawSource')

class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('Hello World Plugin', (
      stats /* stats is passed as an argument when done hook is tapped.  */
    ) => {
      Object.keys(stats.assets).map(filename => {
        stats.assets[filename] = new RawSource(stats.assets[filename].source() + '\n // 1212312323')
      })
    });
  }
}

module.exports = HelloWorldPlugin;