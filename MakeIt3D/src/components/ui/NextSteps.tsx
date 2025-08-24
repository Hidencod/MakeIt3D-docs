// src/components/ui/NextSteps.tsx
import React from 'react';
import styles from './NextSteps.module.css';

interface NextStepItem {
    title: string;
    description: string;
    link: string;
    emoji: string;
}

interface NextStepsProps {
    steps: NextStepItem[];
    className?: string;
}

const defaultSteps: NextStepItem[] = [
   
    {
        title: "Configuration",
        description: "Discover all plugin properties and customization options",
        link: "./aces/properties",
        emoji: "⚙️"
    },
    {
        title: "API Reference",
        description: "Complete documentation of actions, conditions, and expressions",
        link: "./aces",
        emoji: "🔧"
    },
    {
        title: "Examples",
        description: "Explore ready-made 3D scenes and projects to jumpstart your development",
        link: "./examples",
        emoji: "📚"
    },
    // {
    //     title: "Advanced Tutorials",
    //     description: "Build complex 3D scenes with lighting, animations, and effects",
    //     link: "./examples/advanced",
    //     emoji: "🎯"
    // }
];

export default function NextSteps({ steps = defaultSteps, className = "" }: NextStepsProps) {
    return (
        <div className={`${styles.nextStepsGrid} ${className}`}>
            {steps.map((step, index) => (
                <div key={index} className={styles.nextStepCard}>
                    <h3 className={styles.cardTitle}>
                        <span>{step.emoji}</span>
                        {step.title}
                    </h3>
                    <p className={styles.cardDescription}>
                        {step.description}
                    </p>
                    <a href={step.link} className={styles.cardLink}>
                        View Details →
                    </a>
                </div>
            ))}
        </div>
    );
}