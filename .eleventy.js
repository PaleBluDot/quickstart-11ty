module.exports = function(evelentyConfig) {
	// PASSTHROUGH COPY
	evelentyConfig.addPassthroughCopy({"src/img": "media"});

	return {
		dir: {
			input: 'src',
			output: 'build',
			data: '_data',
		},
		passthroughFileCopy: true,
	};
};
