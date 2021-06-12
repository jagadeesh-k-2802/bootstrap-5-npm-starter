const purgecss = require('@fullhuman/postcss-purgecss');
const plugins = [require('autoprefixer')];

if (process.env.NODE_ENV === 'production') {
  plugins.push(purgecss({ content: ['./**/*.html'] }));
}

module.exports = { plugins };
