// Alternative approach - ActionTable.tsx
import React, { useState } from "react";
import styles from './ActionTable.module.css';

interface ActionData {
    name: string;
    description: string;
    parameters: string;
    example: string;
    category: string;
}

interface ActionTableProps {
    title: string;
    icon: string;
    color: string;
    actions: ActionData[];
}

export default function ActionTable({ title, icon, color, actions }: ActionTableProps) {
    const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

    const toggleRow = (index: number) => {
        const newExpanded = new Set(expandedRows);
        if (newExpanded.has(index)) {
            newExpanded.delete(index);
        } else {
            newExpanded.add(index);
        }
        setExpandedRows(newExpanded);
    };

    return (
        <div className={styles.actionSection} style={{ '--category-color': color } as React.CSSProperties}>
            <div className={styles.sectionHeader}>
                <div className={styles.iconContainer}>
                    <span className={styles.icon}>{icon}</span>
                </div>
                <h2 className={styles.sectionTitle}>{title}</h2>
                <div className={styles.badge}>
                    <span className={styles.count}>{actions.length}</span>
                </div>
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.actionTable}>
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Description</th>
                            <th>Parameters</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {actions.map((action, index) => (
                            <React.Fragment key={index}>
                                <tr
                                    className={`${styles.actionRow} ${expandedRows.has(index) ? styles.expanded : ''}`}
                                    onClick={() => toggleRow(index)}
                                >
                                    <td className={styles.actionName}>{action.name}</td>
                                    <td className={styles.actionDescription}>{action.description}</td>
                                    <td className={styles.actionParameters}>
                                        <code>{action.parameters}</code>
                                    </td>
                                    <td className={styles.expandIcon}>
                                        {expandedRows.has(index) ? '▼' : '▶'}
                                    </td>
                                </tr>
                                {expandedRows.has(index) && (
                                    <tr className={styles.exampleRow}>
                                        <td colSpan={4}>
                                            <div className={styles.exampleContainer}>
                                                <h4>Example Usage:</h4>
                                                <pre className={styles.exampleCode}>{action.example}</pre>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}