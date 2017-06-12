import marked from 'marked';

const hljs = window.hljs;

// override original renderer method of code blocks
// specify className to <pre />s
const renderer = new marked.Renderer();
function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

renderer.code = function (code, lang, escaped) {
  if (this.options.highlight) {
    const out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return `<pre><code>${
      escaped ? code : escape(code, true)
      }\n</code></pre>`;
  }

  const className = `${this.options.langPrefix}${escape(lang, true)}`;

  return `<pre class="${className}"><code class="${className}">${
    escaped ? code : escape(code, true)
    }\n</code></pre>\n`;
};

marked.setOptions({ renderer });

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
