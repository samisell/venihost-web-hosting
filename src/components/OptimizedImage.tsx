import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  fallback?: React.ReactNode;
}

// Curated high-resolution images for data center, hosting, and enterprise features
const IMAGE_FALLBACK_MAP: Record<string, string> = {
  '/servers-delivering-web-content.jpg': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
  '/smiling-engineer-using-laptop-data-center-oversee-hardware.jpg': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80',
  '/computer-scientist-data-center-using-diagnostic-tools-laptop.jpg': 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1400&q=80',
  '/data-center-engineer-leverages-artificial-intelligence-visualization-tools.jpg': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=80',
  '/data-center-programmer-uses-node-tree-software-identify-equipment-issues.jpg': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80',
  '/african-american-engineer-inspecting-interlinked-computers-creating-server-network-high-tech-facility-using-parallel-computing-perform-complex-calculations-process-large-amounts-data.jpg': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80',
  '/CyberPanel-409965283.webp': 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1400&q=80',
  '/2041337552329248768.png': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
  '/2041339475967086592.png': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
  '/photo_5951573248094964867_y.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  '/photo_5951573248094964868_y.jpg': 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=1400&q=80',
  '/photo_5951573248094964863_y.jpg': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  width,
  height,
  fallback,
  onError,
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // If original source failed and we have a curated CDN fallback, switch to it
    if (IMAGE_FALLBACK_MAP[src] && currentSrc !== IMAGE_FALLBACK_MAP[src]) {
      setCurrentSrc(IMAGE_FALLBACK_MAP[src]);
    } else if (src.startsWith('/') && currentSrc !== 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80') {
      setCurrentSrc('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80');
    } else {
      setHasError(true);
    }
    if (onError) onError(e);
  };

  if (hasError && fallback) {
    return <>{fallback}</>;
  }

  // Check if it's a picsum URL to append webp
  const isPicsum = currentSrc.includes('picsum.photos');
  const webpSrc = isPicsum ? `${currentSrc}.webp` : null;

  return (
    <picture className={cn("block overflow-hidden", className)}>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn("w-full h-full object-cover transition-opacity duration-500", className)}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        referrerPolicy="no-referrer"
        onError={handleError}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
