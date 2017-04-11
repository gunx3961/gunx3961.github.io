import marked from 'marked';

function renderMarkdown(mdString) {
  return new Promise((resolve, reject) => {
    marked(mdString, null, (err, content) => {
      if (err) reject('Parsing error');
      resolve(content);
    });
  });
}

export default renderMarkdown;
