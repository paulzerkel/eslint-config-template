module.exports = {
  'extends': [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/strict-mode',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
};
