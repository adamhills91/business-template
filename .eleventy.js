module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/css/plugins");
  eleventyConfig.addPassthroughCopy("./src/js/scripts.min.js");
  eleventyConfig.addPassthroughCopy("./src/assets");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
