// src/components/ui/ExpressionCard.tsx
import React from "react";
import styles from './ExpressionCard.module.css';

// Enhanced parameter type with description support
interface ParameterInfo {
    name: string;
    description: string;
}

interface ExpressionProps {
    name: string;
    description?: string;
    parameters?: ParameterInfo[]; // Now structured like ActionCard and ConditionCard
    returnType: 'number' | 'string' | 'boolean' | 'object';
    example?: string;
    category: 'scene' | 'camera' | 'object' | 'model' | 'animation' | 'physics' | 'utils';
    usage?: string; // How to use it in Construct 3
}

interface ExpressionCardProps {
    expression: ExpressionProps;
    className?: string;
}

export default function ExpressionCard({ expression, className = "" }: ExpressionCardProps) {
    const getCategoryIcon = (category: string) => {
        const icons = {
            scene: '🌍',
            camera: '📷',
            object: '📦',
            model: '🗿',
            animation: '🎬',
            raycast: '⚡',
            utils: '🔧',
            force_and_torques: '💪',
            collision: '💥'
        };
        return icons[category as keyof typeof icons] || '📊';
    };

    const getCategoryColor = (category: string) => {
        const colors = {
            scene: 'var(--scene-color)',
            camera: 'var(--camera-color)',
            object: 'var(--object-color)',
            model: 'var(--model-color)',
            animation: 'var(--animation-color)',
            raycast: 'var(--physics-color)',
            utils: 'var(--utils-color)',
            force_and_torques: 'var(--force-and-torques-color)',
            collision: 'var(--collision-color)'
        };
        return colors[category as keyof typeof colors] || '#6b7280';
    };

    const getReturnTypeIcon = (returnType: string) => {
        const icons = {
            number: '🔢',
            string: '📝',
            boolean: '✓',
            object: '📋'
        };
        return icons[returnType as keyof typeof icons] || '📊';
    };

    const getReturnTypeColor = (returnType: string) => {
        const colors = {
            number: '#3b82f6',
            string: '#10b981',
            boolean: '#f59e0b',
            object: '#8b5cf6'
        };
        return colors[returnType as keyof typeof colors] || '#6b7280';
    };

    return (
        <div
            className={`${styles.expressionCard} ${className}`}
            style={{
                '--category-color': getCategoryColor(expression.category),
                '--return-type-color': getReturnTypeColor(expression.returnType)
            } as React.CSSProperties}
        >
            <div className={styles.header}>
                <div className={styles.iconContainer}>
                    <span className={styles.icon}>{getCategoryIcon(expression.category)}</span>
                </div>
                <div className={styles.titleContainer}>
                    <h3 className={styles.expressionName}>{expression.name}</h3>
                    <span className={styles.category}>{expression.category}</span>
                </div>
                <div className={styles.returnTypeContainer}>
                    <span className={styles.returnTypeIcon}>{getReturnTypeIcon(expression.returnType)}</span>
                    <span className={styles.returnType}>{expression.returnType}</span>
                </div>
            </div>

            {expression.description && (
                <p className={styles.description}>{expression.description}</p>
            )}

            {expression.parameters && expression.parameters.length > 0 && (
                <div className={styles.parameters}>
                    <h4 className={styles.parametersTitle}>Parameters</h4>
                    <div className={styles.parametersList}>
                        {expression.parameters.map((param, index) => (
                            <div key={index} className={styles.parameterItem}>
                                <span className={styles.parameterName}>{param.name}</span>
                                <div className={styles.parameterDescription}>{param.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {expression.usage && (
                <div className={styles.usage}>
                    <h4 className={styles.usageTitle}>Construct 3 Usage:</h4>
                    <code className={styles.usageCode}>{expression.usage}</code>
                </div>
            )}

            {expression.example && (
                <div className={styles.example}>
                    <h4 className={styles.exampleTitle}>Example:</h4>
                    <code className={styles.exampleCode}>{expression.example}</code>
                </div>
            )}

            <div className={styles.badge}>
                <span className={styles.badgeText}>Expression</span>
            </div>
        </div>
    );
}