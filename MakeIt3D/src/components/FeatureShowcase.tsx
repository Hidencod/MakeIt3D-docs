// src/components/FeatureShowcase.tsx
import React from 'react';
import styles from './FeatureShowcase.module.css';

interface Feature {
    icon: string;
    title: string;
    description: string;
    highlight?: boolean;
}

const features: Feature[] = [
    {
        icon: '🚀',
        title: 'Easy Integration',
        description: 'Add stunning 3D graphics to your Construct 3 projects with just a few clicks. No complex setup required.',
        highlight: true
    },
    {
        icon: '⚡',
        title: 'High Performance',
        description: 'Powered by Three.js and WebGL for smooth 60fps 3D rendering across all modern browsers.'
    },
    {
        icon: '🎨',
        title: 'Rich Materials',
        description: 'Support for textures, lighting, shadows, and advanced materials.'
    },
    {
        icon: '📦',
        title: '3D Objects',
        description: 'Built-in primitives, model loading (GLB/GLTF and Fbx), and tools for creating custom geometries.'
    },
    {
        icon: '🎬',
        title: 'Animation System',
        description: 'Play, resume and stop animation controls including animation transition and blending.'
    },
    {
        icon: '📱',
        title: 'Cross-Platform',
        description: 'Deploy to web, mobile, and desktop with full 3D support across all Construct 3 platforms.'
    }
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
    return (
        <div className={`${styles.featureCard} ${feature.highlight ? styles.highlighted : ''}`}>
            <div className={styles.featureIcon}>
                <span>{feature.icon}</span>
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
            {feature.highlight && (
                <div className={styles.highlightBadge}>Most Popular</div>
            )}
        </div>
    );
}

export default function FeatureShowcase() {
    return (
        <section className={styles.showcase}>
            <div className="container">
                <div className={styles.showcaseHeader}>
                    <h2 className={styles.showcaseTitle}>
                        Everything you need to create amazing 3D experiences
                    </h2>
                    <p className={styles.showcaseSubtitle}>
                        MakeIt3D brings professional 3D capabilities to Construct 3,
                        making it easy for developers of all skill levels to create stunning 3D games and applications.
                    </p>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>

                {/* <div className={styles.showcaseFooter}>
                    <div className={styles.statsContainer}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>1000+</span>
                            <span className={styles.statLabel}>Developers</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Actions</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>24/7</span>
                            <span className={styles.statLabel}>Support</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}