// src/components/ui/MyCard.tsx
import React from "react";
import { useHistory } from '@docusaurus/router';
import styles from './MyCard.module.css';

interface MyCardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'actions' | 'conditions' | 'expressions' | 'properties';
    subtitle?: string;
    href?: string;
    onClick?: () => void;
}

export default function MyCard({
    title,
    children,
    className = "",
    variant = 'actions',
    subtitle,
    href,
    onClick
}: MyCardProps) {
    const history = useHistory();
    const getCardClasses = () => {
        const baseClasses = styles.card;
        switch (variant) {
            case 'actions':
                return `${baseClasses} ${styles.actionsCard}`;
            case 'conditions':
                return `${baseClasses} ${styles.conditionsCard}`;
            case 'expressions':
                return `${baseClasses} ${styles.expressionsCard}`;
            case 'properties':
                return `${baseClasses} ${styles.propertiesCard}`;
            default:
                return baseClasses;
        }
    };

    const getContentClasses = () => {
        switch (variant) {
            case 'actions':
                return `${styles.content} ${styles.actionsContent}`;
            case 'conditions':
                return `${styles.content} ${styles.conditionsContent}`;
            case 'expressions':
                return `${styles.content} ${styles.expressionsContent}`;
            case 'properties':
                return `${styles.content} ${styles.propertiesContent}`;
            default:
                return styles.content;
        }
    };

    const getAccentClasses = () => {
        switch (variant) {
            case 'actions':
                return `${styles.accentLine} ${styles.actionsAccent}`;
            case 'conditions':
                return `${styles.accentLine} ${styles.conditionsAccent}`;
            case 'expressions':
                return `${styles.accentLine} ${styles.expressionsAccent}`;
            case 'properties':
                return `${styles.accentLine} ${styles.propertiesAccent}`;
            default:
                return styles.accentLine;
        }
    };

    const getIcon = () => {
        switch (variant) {
            case 'actions':
                return '⚡';
            case 'conditions':
                return '🎯';
            case 'expressions':
                return '🧮';
            case 'properties':
                return '⚙️';
            default:
                return '📊';
        }
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (href) {
            // Check if it's an external link
            if (href.startsWith('http://') || href.startsWith('https://')) {
                window.open(href, '_blank');
            }
            // For anchor links within the same page
            else if (href.startsWith('#')) {
                window.location.hash = href;
                const element = document.getElementById(href.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            // For internal Docusaurus pages - use smooth navigation
            else {
                history.push(href);
            }
        }

        if (onClick) {
            onClick();
        }
    };

    const CardComponent = href ? 'a' : 'div';
    const cardProps = href ? {
        href,
        style: { textDecoration: 'none', color: 'inherit' },
        onClick: handleClick
    } : { onClick: onClick ? handleClick : undefined };

    return (
        <CardComponent className={`${getCardClasses()} ${className}`} {...cardProps}>
            {/* Pattern overlay */}
            <div className={styles.patternOverlay}></div>

            {/* Header */}
            <div className={styles.header}>
                <div>
                    {title && (
                        <h3 className={styles.title}>
                            {title}
                        </h3>
                    )}
                </div>
                <span className={styles.icon}>
                    {getIcon()}
                </span>
            </div>

            {/* Content */}
            <div className={getContentClasses()}>
                {children}
            </div>

            {/* Optional subtitle */}
            {subtitle && (
                <div className={styles.subtitle}>
                    {subtitle}
                </div>
            )}

            {/* Accent line */}
            <div className={getAccentClasses()}></div>
        </CardComponent>
    );
}