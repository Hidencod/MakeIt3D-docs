// src/components/CodePreview.tsx
import React, { useState } from 'react';
import styles from './CodePreview.module.css';

const codeExamples = {
    basic: `// Create a simple 3D scene in Construct 3
System → On start of layout
├─ MakeIt3D → Create Scene (800, 600)
├─ MakeIt3D → Create Cube (0, 0, 0, 1, 1, 1)
├─ MakeIt3D → Set Object Color ("cube_1", "#ff6b6b")
└─ MakeIt3D → Set Camera Position (0, 0, 5)`,

    advanced: `// Advanced 3D scene with lighting and animation
System → On start of layout
├─ MakeIt3D → Create Scene (1200, 800)
├─ MakeIt3D → Load Model ("characters/hero.glb", 0, 0, 0)
├─ MakeIt3D → Create Directional Light (1, 1, 1, "#ffffff", 1.0)
├─ MakeIt3D → Set Ambient Light ("#404040", 0.3)
├─ MakeIt3D → Enable Orbit Controls
└─ MakeIt3D → Play Animation ("hero", "idle")

Every 0.1 seconds
└─ MakeIt3D → Rotate Object ("hero", 0, 1, 0)`,

    materials: `// Working with materials and textures
System → On start of layout
├─ MakeIt3D → Create Sphere (0, 0, 0, 1)
├─ MakeIt3D → Apply Texture ("sphere_1", "textures/metal.jpg")
├─ MakeIt3D → Set Material Properties ("sphere_1", 0.2, 1.0, 0)
└─ MakeIt3D → Set Environment Map ("textures/hdri.hdr")

Mouse → On Left Click
└─ MakeIt3D → Set Object Color ("sphere_1", choose("red", "blue", "green"))`
};

const tabs = [
    { key: 'basic', label: 'Basic Scene', icon: '🎯' },
    { key: 'advanced', label: 'Advanced', icon: '🚀' },
    { key: 'materials', label: 'Materials', icon: '🎨' }
];

export default function CodePreview() {
    const [activeTab, setActiveTab] = useState('basic');

    return (
        <section className={styles.codePreview}>
            <div className="container">
                <div className={styles.previewHeader}>
                    <h2 className={styles.previewTitle}>
                        See MakeIt3D in action
                    </h2>
                    <p className={styles.previewSubtitle}>
                        Simple, intuitive actions that integrate seamlessly with Construct 3's event system
                    </p>
                </div>

                <div className={styles.codeContainer}>
                    <div className={styles.tabBar}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                className={`${styles.tab} ${activeTab === tab.key ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                <span className={styles.tabIcon}>{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.codeBlock}>
                        <div className={styles.codeHeader}>
                            <div className={styles.windowDots}>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                            </div>
                            <span className={styles.fileName}>Event Sheet - {tabs.find(t => t.key === activeTab)?.label}</span>
                        </div>
                        <pre className={styles.codeContent}>
                            <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
                        </pre>
                    </div>

                    <div className={styles.featureList}>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>✨</span>
                            <div>
                                <h4>Visual Event System</h4>
                                <p>Use familiar Construct 3 events to control 3D objects</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>⚡</span>
                            <div>
                                <h4>Real-time Updates</h4>
                                <p>Changes reflect instantly in your 3D scene</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>🎮</span>
                            <div>
                                <h4>Game-ready</h4>
                                <p>Built for interactive experiences and games</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}