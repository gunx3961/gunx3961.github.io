import classNames from './Footer.module.scss';

export default () => (
  <footer className={classNames.footer}>
    <span>
      Hosted by{' '}
      <a href="https://github.com/gunx3961/gunx3961.github.io">GitHub Pages</a>
      {', '}
    </span>
    <span>Copyright (C) 2017-2019 Gunx</span>
  </footer>
);
