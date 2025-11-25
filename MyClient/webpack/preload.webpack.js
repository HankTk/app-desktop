module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './electron/bridge.ts',
  module: {
    rules: require('./rules.webpack'),
  }
};


