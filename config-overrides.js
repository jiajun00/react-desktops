/* config-overrides.js */
const { override, fixBabelImports } = require('customize-cra');


module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: '@alifd/next',
    libraryDirectory: 'es'
  })
);