const {
    addLessLoader,
    fixBabelImports,
    override
  } = require("customize-cra");
  
  module.exports = {
    webpack: override(
      fixBabelImports("styled-jsx/babel", {
        libraryName: "antd-mobile",
        style: true
      })
    )
  };


/*
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function override(config, env) {
  config = addBabelPlugin(["styled-jsx/babel"], config);

  return config;
};
*/

/*
const rewireStyledComponents = require('react-app-rewire-styled-components');


module.exports = function override(config, env) {
    config = rewireStyledComponents(config, env, {
        ssr: true,
      })
  return config;
}
*/