// components/ImageModal/ImageModal.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageModal.module.css';

interface ImageModalProps {
  thumbnailSrc: string;
  fullSrc: string;
  alt: string;
}

export default function ImageModal({ thumbnailSrc, fullSrc, alt }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div 
        className={styles.thumbnail}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={thumbnailSrc}
          alt={alt}
          width={800}
          height={450}
          className={styles.thumbnailImage}
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className={styles.modalOverlay}
          onClick={() => setIsOpen(false)}
        >
          <div className={styles.modalContent}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              ×
            </button>
            <Image
              src={fullSrc}
              alt={alt}
              width={1920}
              height={1080}
              className={styles.fullImage}
            />
          </div>
        </div>
      )}
    </>
  );
}