module.exports = function (eleventy) {
  eleventy.addPassthroughCopy('./_site/images');
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_site',
      output: 'dist',
    },
  };
};
