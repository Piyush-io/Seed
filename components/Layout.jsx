import { useRouter } from 'next/router';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.mainContent}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;