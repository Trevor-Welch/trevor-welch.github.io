import React from 'react';
import styles from './OpenForWork.module.css';

export default function OpenForWork() {
  return (
    <div className={styles.container}>
      <div className={styles.badge}>
        <div className={styles.indicatorWrapper}>
          
          {/* Pulsing ring */}
          <div className={styles.pulseRing}></div>

          {/* Green square */}
          <div className={styles.greenSquare}></div>
        </div>
        <span className={styles.text}>Open for work</span>
      </div>
    </div>
  );
}