// src/components/ui/ExampleCard.tsx
import React from "react";
import styles from './ExampleCard.module.css';

interface ExampleCardProps {
    title: string;
    description: string;
    thumbnail: string;
    previewMedia?: string;
    previewType?: 'gif' | 'video';
    difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
    tags?: string[];
    playUrl?: string;
    c3pUrl?: string;
    featured?: boolean;
    className?: string;
    onPlayClick?: (url: string, title: string) => void; // New prop for modal handling
}

export default function ExampleCard({
    title,
    description,
    thumbnail,
    previewMedia,
    previewType = 'gif',
    difficulty = 'Beginner',
    tags = [],
    playUrl,
    c3pUrl,
    featured = false,
    className = "",
    onPlayClick // New prop
}: ExampleCardProps) {
    const [isHovering, setIsHovering] = React.useState(false);
    const [showPreview, setShowPreview] = React.useState(false);
    const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handlePlayClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (playUrl) {
            if (onPlayClick) {
                // Use modal if callback is provided
                onPlayClick(playUrl, title);
            } else {
                // Fallback to new tab
                window.open(playUrl, '_blank');
            }
        }
    };

    const handleDownloadClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (c3pUrl) {
            window.open(c3pUrl, '_blank');
        }
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
        if (previewMedia) {
            hoverTimeoutRef.current = setTimeout(() => {
                setShowPreview(true);
            }, 800);
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setShowPreview(false);
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
    };

    React.useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`${styles.card} ${featured ? styles.featured : ''} ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
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
                    className={`${styles.thumbnail} ${showPreview ? styles.thumbnailHidden : ''}`}
                    loading="lazy"
                />

                {/* Preview media */}
                {previewMedia && showPreview && (
                    <div className={styles.previewContainer}>
                        {previewType === 'video' ? (
                            <video
                                src={previewMedia}
                                className={styles.previewMedia}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        ) : (
                            <img
                                src={previewMedia}
                                alt={`${title} preview`}
                                className={styles.previewMedia}
                            />
                        )}
                    </div>
                )}

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

                {/* Preview indicator */}
                {previewMedia && !showPreview && isHovering && (
                    <div className={styles.previewIndicator}>
                        Hold to preview
                    </div>
                )}
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