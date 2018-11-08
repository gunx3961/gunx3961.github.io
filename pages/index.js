import * as React from 'react';
import Link from 'next/link';

export default () => (
  <>
    <h1>GUNX.INFO</h1>
    <section>
      <p>Hello Next.js</p>
      <div>
        Click{' '}
        <Link href="/about">
          <a>here</a>
        </Link>{' '}
        to read more
      </div>

    </section>
  </>
);
