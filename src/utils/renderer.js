import marked from 'marked';
import highlight from 'highlight.js';

function AsyncHighlightAuto(value, languageSubset) {
  return new Promise((resolve) => {
    const result = highlight.highlightAuto(value, languageSubset);
    resolve(result);
  });
}

marked.setOptions({
  highlight(code, lang, callback) {
    AsyncHighlightAuto(code)
      .then((result) => {
        callback(null, result.value);
      }, (err) => {
        callback(err);
      });
  },
});

function renderMarkdown(mdString) {
  return new Promise((resolve, reject) => {
    marked(mdString, (err, content) => {
      if (err) reject('Parsing error');
      resolve(content);
    });
  });
}

export default renderMarkdown;
