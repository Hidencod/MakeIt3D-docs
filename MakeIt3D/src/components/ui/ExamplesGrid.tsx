// src/components/ui/ExamplesGrid.tsx
import React, { useState } from "react";
import ExampleCard from './ExampleCard';
import GamePlayerModal from './GamePlayerModal';
import styles from './ExamplesGrid.module.css';

interface Example {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    previewMedia?: string;
    previewType?: 'gif' | 'video';
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    tags: string[];
    playUrl?: string;
    c3pUrl?: string;
    featured?: boolean;
    category?: string;
}

interface ExamplesGridProps {
    examples: Example[];
    className?: string;
}

export default function ExamplesGrid({ examples, className = "" }: ExamplesGridProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalGameUrl, setModalGameUrl] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    // Extract unique categories and difficulties
    const categories = ['All', ...new Set(examples.map(ex => ex.category).filter(Boolean))];
    const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    // Filter examples
    const filteredExamples = examples.filter(example => {
        const categoryMatch = selectedCategory === 'All' || example.category === selectedCategory;
        const difficultyMatch = selectedDifficulty === 'All' || example.difficulty === selectedDifficulty;
        return categoryMatch && difficultyMatch;
    });

    // Separate featured examples
    const featuredExamples = filteredExamples.filter(ex => ex.featured);
    const regularExamples = filteredExamples.filter(ex => !ex.featured);

    // Handle modal opening
    const handlePlayClick = (url: string, title: string) => {
        setModalGameUrl(url);
        setModalTitle(title);
        setIsModalOpen(true);
    };

    // Handle modal closing
    const handleModalClose = () => {
        setIsModalOpen(false);
        setModalGameUrl('');
        setModalTitle('');
    };

    return (
        <div className={`${styles.container} ${className}`}>
            {/* Filters */}
            <div className={styles.filters}>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Category:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className={styles.filterSelect}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Difficulty:</label>
                    <select
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                        className={styles.filterSelect}
                    >
                        {difficulties.map(difficulty => (
                            <option key={difficulty} value={difficulty}>{difficulty}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.resultsCount}>
                    {filteredExamples.length} example{filteredExamples.length !== 1 ? 's' : ''}
                </div>
            </div>

            {/* Featured Examples */}
            {featuredExamples.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>⭐ Featured Examples</h2>
                    <div className={styles.grid}>
                        {featuredExamples.map(example => (
                            <ExampleCard
                                key={example.id}
                                title={example.title}
                                description={example.description}
                                thumbnail={example.thumbnail}
                                previewMedia={example.previewMedia}
                                previewType={example.previewType}
                                difficulty={example.difficulty}
                                tags={example.tags}
                                playUrl={example.playUrl}
                                c3pUrl={example.c3pUrl}
                                featured={example.featured}
                                onPlayClick={handlePlayClick}
                            />
                        ))}
                    </div>
                </section>
            )}

            {/* Regular Examples */}
            {regularExamples.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        {featuredExamples.length > 0 ? 'All Examples' : 'Examples'}
                    </h2>
                    <div className={styles.grid}>
                        {regularExamples.map(example => (
                            <ExampleCard
                                key={example.id}
                                title={example.title}
                                description={example.description}
                                thumbnail={example.thumbnail}
                                previewMedia={example.previewMedia}
                                previewType={example.previewType}
                                difficulty={example.difficulty}
                                tags={example.tags}
                                playUrl={example.playUrl}
                                c3pUrl={example.c3pUrl}
                                featured={example.featured}
                                onPlayClick={handlePlayClick}
                            />
                        ))}
                    </div>
                </section>
            )}

            {/* No results */}
            {filteredExamples.length === 0 && (
                <div className={styles.noResults}>
                    <div className={styles.noResultsIcon}>🔍</div>
                    <h3 className={styles.noResultsTitle}>No examples found</h3>
                    <p className={styles.noResultsDescription}>
                        Try adjusting your filters or check back later for new examples.
                    </p>
                </div>
            )}

            {/* Game Player Modal */}
            <GamePlayerModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                gameUrl={modalGameUrl}
                title={modalTitle}
            />
        </div>
    );
}

// Export the Example interface for use in other files
export type { Example };