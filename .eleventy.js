module.exports = function(config) {
	config.addPassthroughCopy('src/img');

	return {
		dir: {
			input: 'src',
			output: 'build',
			data: '_data',
		},
		templateFormats: ['html', 'njk', 'md', '11ty.js', 'jpg', 'png'],
		passthroughFileCopy: true,
	};
};
