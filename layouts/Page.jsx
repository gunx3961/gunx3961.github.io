import Meta from '../components/Meta';
import Footer from '../components/Footer';
import classNames from './Page.module.scss';

export default ({ children }) => (
  <>
    <Meta />
    <div className={classNames.container}>
      {children}
    </div>
    <Footer />
  </>
);
