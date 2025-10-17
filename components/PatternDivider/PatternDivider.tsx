// components/PatternDivider/PatternDivider.tsx
import React from "react";
import styles from "./PatternDivider.module.css";

interface PatternDividerProps {
  direction?: "left-to-right" | "right-to-left";
}

const PatternDivider: React.FC<PatternDividerProps> = ({
  direction = "left-to-right",
}) => {
  // Map direction prop to CSS class
  const animationClass =
    direction === "right-to-left" ? styles.wipeRightToLeft : styles.wipeLeftToRight;

  return (
    <div className={`${styles.pattern} ${animationClass}`}>
      <div className={styles.patternInner}></div>
    </div>
  );
};

export default PatternDivider;
