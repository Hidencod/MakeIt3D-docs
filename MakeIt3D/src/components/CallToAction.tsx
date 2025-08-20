// src/components/CallToAction.tsx
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CallToAction.module.css';

export default function CallToAction() {
    return (
        <section className={styles.cta}>
            <div className="container">
                <div className={styles.ctaCard}>
                    <div className={styles.ctaContent}>
                        <div className={styles.ctaText}>
                            <h2 className={styles.ctaTitle}>
                                Ready to transform your games with 3D?
                            </h2>
                            <p className={styles.ctaDescription}>
                                Join thousands of developers who are already creating amazing 3D experiences
                                with MakeIt3D. Get started today and bring your creative vision to life.
                            </p>

                            <div className={styles.ctaFeatures}>
                                <div className={styles.ctaFeature}>
                                    <span className={styles.ctaFeatureIcon}>✅</span>
                                    <span>30-day money-back guarantee</span>
                                </div>
                                <div className={styles.ctaFeature}>
                                    <span className={styles.ctaFeatureIcon}>✅</span>
                                    <span>Free updates for life</span>
                                </div>
                                <div className={styles.ctaFeature}>
                                    <span className={styles.ctaFeatureIcon}>✅</span>
                                    <span>Priority email support</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.ctaActions}>
                            <div className={styles.ctaButtons}>
                                <Link
                                    className={`button button--primary button--lg ${styles.primaryCta}`}
                                    to="/docs/intro"
                                >
                                    Get Started Now
                                </Link>
                                <Link
                                    className={`button button--outline button--lg ${styles.secondaryCta}`}
                                    to="/docs/examples"
                                >
                                    View Examples
                                </Link>
                            </div>

                            <div className={styles.ctaPrice}>
                                <span className={styles.priceLabel}>Starting from</span>
                                <span className={styles.priceValue}>$29.99</span>
                                <span className={styles.priceNote}>One-time purchase</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ctaVisual}>
                        <div className={styles.visualCard}>
                            <div className={styles.visualHeader}>
                                <div className={styles.visualDots}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className={styles.visualTitle}>MakeIt3D Demo</span>
                            </div>
                            <div className={styles.visualContent}>
                                <div className={styles.cube}>
                                    <div className={styles.face}></div>
                                    <div className={styles.face}></div>
                                    <div className={styles.face}></div>
                                    <div className={styles.face}></div>
                                    <div className={styles.face}></div>
                                    <div className={styles.face}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaFooter}>
                    <div className={styles.socialProof}>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                ⭐⭐⭐⭐⭐
                            </div>
                            <span>4.9/5 from 500+ reviews</span>
                        </div>
                        <div className={styles.badges}>
                            <span className={styles.badge}>🏆 Editor's Choice</span>
                            <span className={styles.badge}>🚀 Best Seller</span>
                            <span className={styles.badge}>💎 Premium Quality</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}