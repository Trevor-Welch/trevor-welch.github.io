// data/projects/tags-bar.tsx
import styles from './tags-bar.module.css';

interface TagsBarProps {
  tags?: string[];
  date?: number;
}

export default function TagsBar({ tags, date }: TagsBarProps) {
  return (
    <div className={styles.tagsBar}>
      <div className={styles.tagsLeft}>
        {tags && tags.map((tag, index) => (
          <span key={tag}>
            {tag.toUpperCase()}
            {index < tags.length - 1 && <span className={styles.separator}> | </span>}
          </span>
        ))}
      </div>
      {date && (
        <div className={styles.dateRight}>
          {date}
        </div>
      )}
    </div>
  );
}