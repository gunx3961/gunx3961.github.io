const fs = require('fs').promises;
const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/
});

async function gatherPosts() {
  const archiveRoot = path.resolve(__dirname, 'blog-archives/posts');
  const categories = await fs.readdir(archiveRoot);

  const allPosts = await Promise.all(
    categories.map(catName => fs.readdir(path.resolve(archiveRoot, catName))
      .then(posts => Promise.resolve({ catName, posts }))),
  );

  return allPosts;
}

const config = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  cssModules: true,
  exportPathMap: async () => {
    const allPosts = await gatherPosts();

    const postMap = {};
    allPosts.forEach(({ catName, posts }) => {
      posts.forEach((postName) => {
        const path = `/p/${catName}/${postName}`;
        postMap[path] = { page: '/post', query: { catName, postName } };
      });
    });

    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      ...postMap,
    };
  }
};

module.exports = withMDX(withSass(withCSS(config)));
