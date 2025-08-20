// src/components/ui/HeroBanner.tsx
import React from 'react';
import styles from './HeroBanner.module.css';

interface HeroBannerProps {
    title: string;
    subtitle: string;
    className?: string;
}

export default function HeroBanner({ title, subtitle, className = "" }: HeroBannerProps) {
    return (
        <div className={`${styles.heroBanner} ${className}`}>
            <div className={styles.heroContent}>
                <h2 className={styles.heroTitle}>{title}</h2>
                <p className={styles.heroSubtitle}>{subtitle}</p>
            </div>
        </div>
    );
}