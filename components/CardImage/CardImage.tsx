import Image from 'next/image';

interface CardImageProps {
  src: string;
  alt?: string;
  maxHeight?: number | string;
  className?: string;
}

export default function CardImage({
  src,
  alt = 'Card Image',
  maxHeight = 500,
  className = '',
}: CardImageProps) {
  const maxH = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;

  return (
    <div
    className={`CardImage ${className}`}
    style={{
        backgroundColor: 'var(--color-text)',
        display: 'inline-block', // important: shrink-wrap the image
        maxWidth: '100%',        // don't let it exceed parent width
        overflow: 'hidden',
        alignSelf: 'flex-start'
    }}
    >
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          height: 'auto',
          width: 'auto',
          maxHeight: maxH,
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}
