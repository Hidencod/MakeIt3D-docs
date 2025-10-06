// src/components/ui/ConditionCard.tsx
import React from "react";
import styles from './ConditionCard.module.css';

// Enhanced parameter type with description support
interface ParameterInfo {
    name: string;
    description: string;
}

interface ConditionProps {
    name: string;
    description?: string;
    parameters?: ParameterInfo[]; // Now structured like ActionCard
    example?: string;
    trigger?: string; // What triggers this condition
    category: 'object' | 'model' | 'scene' | 'camera' | 'animation' | 'physics';
    eventType?: 'trigger' | 'state'; // trigger-based vs state-checking
}

interface ConditionCardProps {
    condition: ConditionProps;
    className?: string;
}

export default function ConditionCard({ condition, className = "" }: ConditionCardProps) {
    const getCategoryIcon = (category: string) => {
        const icons = {
            object: '📦',
            model: '🗿',
            scene: '🌍',
            camera: '📷',
            animation: '🎬',
            forces_torques: '⚡',
            collision: '💥',
            spine: '🦴'  // Added icon for spine
        };
        return icons[category as keyof typeof icons] || '📋';
    };


    const getCategoryColor = (category: string) => {
        const colors = {
            object: 'var(--object-color)',
            model: 'var(--model-color)',
            scene: 'var(--scene-color)',
            camera: 'var(--camera-color)',
            animation: 'var(--animation-color)',
            physics: 'var(--physics-color)',
            forces_torques: 'var(--forces-torques-color)',
            collision: 'var(--collisions-color)',
            spine: 'var(--spine-color)'  // Added color for spine
        };
        return colors[category as keyof typeof colors] || '#6b7280';
    };


    const getEventTypeIcon = (eventType?: string) => {
        switch (eventType) {
            case 'trigger':
                return '⚡';
            case 'state':
                return '📋';
            case 'loop':
                return '🔁';
            default:
                return '📋';
        }
    };


    const getEventTypeBadge = (eventType?: string) => {
        switch (eventType) {
            case 'trigger':
                return 'Event Trigger';
            case 'state':
                return 'State Check';
            case 'loop':
                return 'Loop / Iteration';
            default:
                return 'Condition';
        }
    };


    return (
        <div
            className={`${styles.conditionCard} ${condition.eventType === 'trigger' ? styles.triggerCard : styles.stateCard} ${className}`}
            style={{ '--category-color': getCategoryColor(condition.category) } as React.CSSProperties}
        >
            <div className={styles.header}>
                <div className={styles.iconContainer}>
                    <span className={styles.icon}>{getCategoryIcon(condition.category)}</span>
                </div>
                <div className={styles.titleContainer}>
                    <h3 className={styles.conditionName}>{condition.name}</h3>
                    <span className={styles.category}>{condition.category}</span>
                </div>
                <div className={styles.eventTypeIcon}>
                    {getEventTypeIcon(condition.eventType)}
                </div>
            </div>

            {condition.description && (
                <p className={styles.description}>{condition.description}</p>
            )}

            {condition.trigger && (
                <div className={styles.trigger}>
                    <h4 className={styles.triggerTitle}>Triggers when:</h4>
                    <p className={styles.triggerText}>{condition.trigger}</p>
                </div>
            )}

            {condition.parameters && condition.parameters.length > 0 && (
                <div className={styles.parameters}>
                    <h4 className={styles.parametersTitle}>Parameters</h4>
                    <div className={styles.parametersList}>
                        {condition.parameters.map((param, index) => (
                            <div key={index} className={styles.parameterItem}>
                                <span className={styles.parameterName}>{param.name}</span>
                                <div className={styles.parameterDescription}>{param.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {condition.example && (
                <div className={styles.example}>
                    <h4 className={styles.exampleTitle}>Example Usage:</h4>
                    <code className={styles.exampleCode}>{condition.example}</code>
                </div>
            )}

            <div className={styles.badge}>
                <span className={styles.badgeText}>{getEventTypeBadge(condition.eventType)}</span>
            </div>
            
        </div>
    );
}