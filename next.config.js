const fs = require('fs').promises;
const path = require('path');

async function gatherPosts() {
  const archiveRoot = path.resolve(__dirname, 'archives');
  const categories = await fs.readdir(archiveRoot);

  const allPosts = await Promise.all(
    categories.map(catName => fs.readdir(path.resolve(archiveRoot, catName))
      .then(posts => Promise.resolve({ catName, posts }))),
  );

  return allPosts;
}

module.exports = {
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
