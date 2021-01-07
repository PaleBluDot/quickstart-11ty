const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy({ 'src/assets/img': 'media' });
  eleventyConfig.setTemplateFormats("html,md,njk");


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
  }
};
