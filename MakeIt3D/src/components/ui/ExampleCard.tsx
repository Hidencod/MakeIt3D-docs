// src/components/ui/ExampleCard.tsx
import React from "react";
import { useHistory } from '@docusaurus/router';
import styles from './ExampleCard.module.css';

interface ExampleCardProps {
    title: string;
    description: string;
    thumbnail: string;
    difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
    tags?: string[];
    playUrl?: string;
    c3pUrl?: string;
    featured?: boolean;
    className?: string;
}

export default function ExampleCard({
    title,
    description,
    thumbnail,
    difficulty = 'Beginner',
    tags = [],
    playUrl,
    c3pUrl,
    featured = false,
    className = ""
}: ExampleCardProps) {
    const history = useHistory();

    const getDifficultyColor = () => {
        switch (difficulty) {
            case 'Beginner':
                return 'green';
            case 'Intermediate':
                return 'orange';
            case 'Advanced':
                return 'red';
            default:
                return 'blue';
        }
    };

    const handlePlayClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (playUrl) {
            window.open(playUrl, '_blank');
        }
    };

    const handleDownloadClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (c3pUrl) {
            window.open(c3pUrl, '_blank');
        }
    };

    return (
        <div className={`${styles.card} ${featured ? styles.featured : ''} ${className}`}>
            {/* Featured star */}
            {featured && (
                <div className={styles.featuredStar}>
                    ⭐
                </div>
            )}

            {/* Thumbnail container */}
            <div className={styles.thumbnailContainer}>
                <img
                    src={thumbnail}
                    alt={title}
                    className={styles.thumbnail}
                    loading="lazy"
                />

                {/* Play overlay */}
                {playUrl && (
                    <div className={styles.playOverlay} onClick={handlePlayClick}>
                        <div className={styles.playButton}>
                            ▶️
                        </div>
                    </div>
                )}

                {/* Difficulty badge */}
                <div className={`${styles.difficultyBadge} ${styles[`difficulty${difficulty}`]}`}>
                    {difficulty}
                </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Actions */}
                <div className={styles.actions}>
                    {playUrl && (
                        <button
                            className={`${styles.button} ${styles.playButton}`}
                            onClick={handlePlayClick}
                            title="Play Example"
                        >
                            ▶️ Play
                        </button>
                    )}
                    {c3pUrl && (
                        <button
                            className={`${styles.button} ${styles.downloadButton}`}
                            onClick={handleDownloadClick}
                            title="Download .c3p file"
                        >
                            📁 .c3p
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}