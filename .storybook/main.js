const webpackConfig = require("../webpack.dev");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "webpackFinal": async (config) => {
    config.module.rules.push(...webpackConfig.module.rules);
    return config;
  }
}