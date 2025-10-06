// src/components/ui/ActionCard.tsx

import React from "react";
import styles from './ActionCard.module.css';

// 👇 Structured parameter type
interface ParameterInfo {
    name: string;
    description: string;
}

interface ActionProps {
    name: string;
    description?: string;
    parameters?: ParameterInfo[];
    example?: string;
    category: 'scene' | 'objects' | 'transformations' | 'camera' | 'lights' | 'materials' | 'animation' | 'utils';
}

interface ActionCardProps {
    action: ActionProps;
    className?: string;
}

export default function ActionCard({ action, className = "" }: ActionCardProps) {
    const getCategoryIcon = (category: string) => {
        const icons = {
            scene: '🌍',
            world: '🌍',
            objects: '📦',
            transforms: '🔄',
            camera: '📷',
            lights: '💡',
            material: '🎨',
            animation: '🎬',
            utils: '🔧',
            raycast: '🎯',  // Target icon for raycasting
            lines: '📏',
            postprocessing: '🪄',
            forces: '💪',
            torques: '🌀',
            collision: '💥',
            joints: '🔗',
            spine: '🦴'  // Icon for Spine category
        };
        return icons[category as keyof typeof icons] || '⚙️';
    };

    const getCategoryColor = (category: string) => {
        const colors = {
            scene: 'var(--scene-color)',
            world: 'var(--world-color)',
            objects: 'var(--objects-color)',
            transforms: 'var(--transformations-color)',
            camera: 'var(--camera-color)',
            lights: 'var(--lights-color)',
            material: 'var(--materials-color)',
            animation: 'var(--animation-color)',
            utils: 'var(--utils-color)',
            raycast: 'var(--raycast-color)',
            lines: 'var(--line-color)',
            postprocessing: 'var(--postprocessing-color)',
            forces: 'var(--force-color)',
            torques: 'var(--torques-color)',
            collision: 'var(--collision-color)',
            joints: 'var(--joints-color)',
            spine: 'var(--spine-color)'  // Color for Spine category
        };
        return colors[category as keyof typeof colors] || '#6b7280';
    };


    return (
        <div
            className={`${styles.actionCard} ${className}`}
            style={{ '--category-color': getCategoryColor(action.category) } as React.CSSProperties}
        >
            <div className={styles.header}>
                <div className={styles.iconContainer}>
                    <span className={styles.icon}>{getCategoryIcon(action.category)}</span>
                </div>
                <div className={styles.titleContainer}>
                    <h3 className={styles.actionName}>{action.name}</h3>
                    <span className={styles.category}>{action.category}</span>
                </div>
            </div>

            {action.description && (
                <p
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: action.description }}
                />
            )}

            {action.parameters && action.parameters.length > 0 && (
                <div className={styles.parameters}>
                    <h4 className={styles.parametersTitle}>Parameters</h4>
                    <div className={styles.parametersList}>
                        {action.parameters.map((param, index) => (
                            <div key={index} className={styles.parameterItem}>
                                <span className={styles.parameterName}>{param.name}</span>
                                <div className={styles.parameterDescription}>{param.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {action.example && (
                <div className={styles.example}>
                    <h4 className={styles.exampleTitle}>Example:</h4>
                    <code className={styles.exampleCode}>{action.example}</code>
                </div>
            )}

            <div className={styles.badge}>
                <span className={styles.badgeText}>Action</span>
            </div>
        </div>
    );
}
