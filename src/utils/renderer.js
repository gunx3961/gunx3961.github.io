import marked from 'marked';

function AsyncHighlight(lang, value) {
  return new Promise((resolve) => {
    if (!hljs.getLanguage(lang)) resolve(value);
    const result = hljs.highlight(lang, value);
    resolve(result.value);
  });
}

if (hljs) {
  marked.setOptions({
    highlight(code, lang, callback) {
      AsyncHighlight(lang, code)
        .then((result) => {
          callback(null, result);
        }, (err) => {
          callback(err);
        });
    },
  });
}

function renderMarkdown(mdString) {
  return new Promise((resolve, reject) => {
    marked(mdString, (err, content) => {
      if (err) reject(err);
      resolve(content);
    });
  });
}

export default renderMarkdown;
