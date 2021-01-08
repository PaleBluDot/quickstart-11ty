const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const htmlMinTransform = require('./src/transforms/html-minifier.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy({ 'src/assets/img': 'media' });
  eleventyConfig.setTemplateFormats('html,md,njk');
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

  eleventyConfig.addTransform('htmlmin', htmlMinTransform);

  return {
    htmlTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md', '11ty.js'],
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'build',
      data: '_data',
    },
  };
};
