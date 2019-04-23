import * as React from 'react';
import Link from 'next/link';

import Page from '../layouts/Page';

import classNames from './index.module.scss';

export default () => (
  <Page>
    <div className={classNames.intro}>
      <div className={classNames.siteLogo} />
      <p className={classNames.introText}>
        # Coming soon.<br />
        # 翻修中。<br />
        # ただいま、工事中です。
      </p>
    </div>
  </Page>
);
