import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();

  // Hide footer on landing page
  if (location.pathname === '/') {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h1 className={styles.companyName}>Seed</h1>

          <div className={styles.leftSection}>
            <h2>Ready to grow?</h2>
            <p>Join thousands of investors cultivating their future with Seed</p>

            <form onSubmit={handleSubmit} className={styles.emailForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button type="submit">
                Plant your future
                <span className={styles.arrow}>→</span>
              </button>
            </form>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.linkGroup}>
              <h3>Platform</h3>
              <div className={styles.links}>
                <a href="/dashboard">Dashboard</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/analytics">Analytics</a>
              </div>
            </div>

            <div className={styles.linkGroup}>
              <h3>Company</h3>
              <div className={styles.links}>
                <a href="/about">About</a>
                <a href="/careers">Careers</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com">
              <span>𝕏</span>
            </a>
            <a href="https://discord.com">
              <span>⌘</span>
            </a>
          </div>

          <div className={styles.legalLinks}>
            <a href="/terms">Terms</a>
            <span>|</span>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;