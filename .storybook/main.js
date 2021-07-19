const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/components/**/stories/*.stories.@(ts|tsx)', 
  '../src/hooks/**/stories/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    'storybook-addon-react-docgen'
  ],
  webpackFinal: async config => {
   config.module.rules.push({
    test: /\.ts(x?)$/,
     include: path.resolve(__dirname, "../src"),
    exclude: /(node_modules|bower_components)/,
    use: [
      {
         loader: require.resolve('ts-loader'),
         options: {
           transpileOnly: true,
         },
      },
      require.resolve("react-docgen-typescript-loader"),
    ],
  });

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias['@emotion/core'] = toPath("node_modules/@emotion/react");
    config.resolve.alias['emotion-theming'] = toPath("node_modules/@emotion/react")

    return config;
  },
};
