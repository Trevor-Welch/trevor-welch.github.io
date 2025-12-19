// components/VideoPlayer/VideoPlayer.tsx
'use client';
import { useRef, useState } from 'react';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        poster={poster}
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls
        loop
      >
        <source src={src} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}