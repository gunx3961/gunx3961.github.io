const octicons = require('octicons');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// use rem unit for responsive layout
const ROOT_FONT_SIZE = 100; // px
const DIST = 'src/components/icons';

// TODO: just use the util.promisify() in future version
function writeFile(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, 'utf8', (err) => {
      if (err) reject(err);
      resolve(path.basename(filename));
    });
  });
}

function generateFileContent(iconName) {
  const octicon = octicons[iconName];
  return `
<template>
  <svg
    once
    :version="_version"
    :class="_class"
    :width="_width"
    :height="_height"
    :viewBox="_viewBox"
    aria-hidden="true"
    :style="{
      width: _width,
      height: _height,
    }"
  >
    ${octicon.path}
  </svg>
</template>
<script>

  export default {
    props: {
      version: {
        type: String,
        default: null,
      },
      className: {
        type: String,
        default: null,
      },
      width: {
        type: String,
        default: null,
      },
      height: {
        type: String,
        default: null,
      },
      viewBox: {
        type: String,
        default: null,
      },
    },
    computed: {
      scale() {
        if (!!this.height === !this.width) {
          return this.height ? this.height / ${octicon.height} : this.width / ${octicon.width};
        }
        return 1;
      },
      _version() {
        return this.version || '${octicon.options.version}';
      },
      _class() {
        return this.className ? \`${octicon.options.class} \${this.className}\` : '${octicon.options.class}';
      },
      _width() {
        return this.width ? \`\${this.width / ${ROOT_FONT_SIZE}}rem\` : \`\${(${octicon.options.width / ROOT_FONT_SIZE} * this.scale).toFixed(2)}rem\`;
      },
      _height() {
        return this.height ? \`\${this.height / ${ROOT_FONT_SIZE}}rem\` : \`\${(${octicon.options.height / ROOT_FONT_SIZE} * this.scale).toFixed(2)}rem\`;
      },
      _viewBox() {
        return this.viewBox || '${octicon.options.viewBox}';
      },
    },
  };
</script>
`;
}

function toPascalCase(hyphenStyleName) {
  if (typeof hyphenStyleName !== 'string') throw new TypeError('value to convert must be a string');
  const replacer = (match, p1) => p1.toUpperCase();
  const camelCase = hyphenStyleName.replace(/-([a-zA-Z])/g, replacer);
  return `${camelCase[0].toUpperCase()}${camelCase.slice(1)}`;
}

function getFilePath(iconName) {
  const filename = `${toPascalCase(iconName)}.vue`;
  return path.resolve('.', DIST, filename);
}

try {
  fs.mkdirSync(path.resolve('.', DIST));
  console.log(chalk.yellow(`mkdir: ${chalk.underline(DIST)}\n`));
} catch (err) {
  if (err.code !== 'EEXIST') throw err;
}

const tasks = Object.keys(octicons)
  .map(iconName => writeFile(getFilePath(iconName), generateFileContent(iconName)));

Promise.all(tasks)
  .then((filenames) => {
    console.log(
      chalk.green(filenames.join(', ')),
      chalk.yellow(`\n\n${filenames.length} icon files builded in: ${chalk.underline(DIST)} .\n`)
    );
  })
  .catch((err) => { console.error(chalk.red(err.stack)); });
