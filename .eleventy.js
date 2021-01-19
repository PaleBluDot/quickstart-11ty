const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const htmlMinTransform = require('./src/transforms/html-minifier.js');
require('dotenv').config();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addTransform('htmlmin', htmlMinTransform);

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('project', 'layouts/project.njk');

  eleventyConfig.addWatchTarget('./src/css/');
  eleventyConfig.addWatchTarget('./src/js/');

  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy('favicon.ico');

  eleventyConfig.setDataDeepMerge(true);

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
