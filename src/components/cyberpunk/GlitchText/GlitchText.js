// components/GlitchText.jsx
import React from 'react';
import styles from './GlitchText.module.css';

const GlitchText = ({ text = "GLITCH", className = "" }) => {
    return (
        <span
            className={`${styles.hero} ${styles.layers} ${styles.glitch} ${className}`}
            data-text={text}
        >
            <span className={styles.paths}>{text}</span>
        </span>
    );
};

export default GlitchText;

