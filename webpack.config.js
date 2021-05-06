var HelloWorldPlugin = require('./my-plugin');

module.exports = {
  // ... configuration settings here ...
  plugins: [new HelloWorldPlugin({ options: true })],
};