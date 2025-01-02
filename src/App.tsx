import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import AppRoutes from './routes';
import ParticlesBackground from './components/ui/ParticlesBackground';
import ScrollToTop from './components/ScrollToTop';
import styles from './App.module.css';

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={isHomePage ? styles.appHome : styles.app}>
      <ParticlesBackground className="fixed inset-0 z-0" particleCount={100} speed={0.2} />
      <Layout>
        <main className={isHomePage ? styles.mainHome : styles.main}>
          <AppRoutes />
        </main>
      </Layout>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <div className="relative min-h-screen">
          <ParticlesBackground className="fixed inset-0 z-0" particleCount={100} speed={0.2} />
          <Layout>
            <main className="pt-4">
              <AppRoutes />
            </main>
          </Layout>
        </div>
      </AuthProvider>
    </Router>
  );
}