import type { JSX, ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Analytics } from '@vercel/analytics/react'; // Generic React import
// Import your custom components
import Hero3DScene from '@site/src/components/Hero3DScene';
import FeatureShowcase from '@site/src/components/FeatureShowcase';
import CodePreview from '@site/src/components/CodePreview';
import CallToAction from '@site/src/components/CallToAction';
import RotatingCube from '../components/RotatingCube';

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.hero)}>
      <div className={styles.heroBackground}>
        <BrowserOnly>
          {() => (
            <>
              <Hero3DScene />
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600">
                <RotatingCube />
              </div>
            </>
          )}
        </BrowserOnly>
      </div>

      <div className={styles.heroContent}>
        <div className="container">
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              MakeIt3D
            </Heading>
            <Analytics />
            <p className={styles.heroSubtitle}>
              Bring your Construct 3 games to life with stunning 3D graphics
            </p>
            <p className={styles.heroDescription}>
              MakeIt3D uses a separate Three.js rendering system that overlays on Construct 3's canvas. 3D objects do not integrate with Construct's layout system, sprite behaviors, or collision detection. This is a standalone 3D rendering solution controlled through events, not an extension of Construct's 2D object system.
            </p>
           
          
            <div className={styles.heroButtons}>
              <Link
                className={clsx('button', 'button--primary', 'button--lg', styles.primaryButton)}
                to="/docs/intro"
              >
                Get Started
              </Link>
              <Link
                className={clsx('button', 'button--outline', 'button--lg', styles.secondaryButton)}
                to="/docs/examples"
              >
                View Examples
              </Link>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>Easy</span>
                <span className={styles.statLabel}>Integration</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>WebGL</span>
                <span className={styles.statLabel}>Powered</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>Cross-Platform</span>
                <span className={styles.statLabel}>Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroScrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </header>
  );
}

function TrustedBy(): JSX.Element {
  return (
    <section className={styles.trustedBy}>
      <div className="container">
        <p className={styles.trustedByText}>Trusted by indie developers and studios worldwide</p>
        <div className={styles.logoGrid}>
          <div className={styles.logoItem}>🎮 Game Studio A</div>
          <div className={styles.logoItem}>🚀 Indie Dev B</div>
          <div className={styles.logoItem}>⭐ Creator C</div>
          <div className={styles.logoItem}>🏆 Team D</div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - 3D Plugin for Construct 3`}
      description="The most powerful Three.js integration for Construct 3. Create stunning 3D games and experiences with ease.">

      <HomepageHeader />

      <main className={styles.main}>
        {/* <TrustedBy /> */}
        <FeatureShowcase />
        <CodePreview />
        <CallToAction />
      </main>
    </Layout>
  );
}