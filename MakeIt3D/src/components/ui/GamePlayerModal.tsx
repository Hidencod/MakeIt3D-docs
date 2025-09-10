// src/components/ui/GamePlayerModal.tsx
import React, { useState, useEffect } from 'react';
import styles from './GamePlayerModal.module.css';

interface GamePlayerModalProps {
    isOpen: boolean;
    onClose: () => void;
    gameUrl: string;
    title: string;
}

export default function GamePlayerModal({ isOpen, onClose, gameUrl, title }: GamePlayerModalProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            setHasError(false);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable body scroll when modal closes
            document.body.style.overflow = '';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    const handleIframeError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={handleBackdropClick}>
            <div className={styles.modalContainer}>
                {/* Header */}
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>{title}</h2>
                    <div className={styles.headerButtons}>
                        <button
                            className={styles.fullscreenButton}
                            onClick={() => window.open(gameUrl, '_blank')}
                            title="Open in full screen"
                        >
                            🔗 Full Screen
                        </button>
                        <button
                            className={styles.closeButton}
                            onClick={onClose}
                            title="Close modal"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className={styles.modalContent}>
                    {isLoading && (
                        <div className={styles.loadingContainer}>
                            <div className={styles.spinner}></div>
                            <p>Loading game...</p>
                        </div>
                    )}

                    {hasError ? (
                        <div className={styles.errorContainer}>
                            <div className={styles.errorIcon}>⚠️</div>
                            <h3>Failed to load game</h3>
                            <p>There was an issue loading this example. Try opening it in a new tab instead.</p>
                            <button
                                className={styles.retryButton}
                                onClick={() => window.open(gameUrl, '_blank')}
                            >
                                Open in New Tab
                            </button>
                        </div>
                    ) : (
                        <iframe
                            src={gameUrl}
                            className={styles.gameFrame}
                            title={title}
                            onLoad={handleIframeLoad}
                            onError={handleIframeError}
                            allow="gamepad; microphone; camera"
                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        />
                    )}
                </div>

                {/* Footer with controls hint */}
                <div className={styles.modalFooter}>
                    <span className={styles.footerHint}>Press ESC to close • Click outside to close</span>
                </div>
            </div>
        </div>
    );
}