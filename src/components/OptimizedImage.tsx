import React from 'react';
import { cn } from '@/src/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  width,
  height,
  ...props 
}) => {
  // Check if it's a picsum URL to append webp
  const isPicsum = src.includes('picsum.photos');
  const webpSrc = isPicsum ? `${src}.webp` : null;

  return (
    <picture className={cn("block overflow-hidden", className)}>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("w-full h-full object-cover transition-opacity duration-500", className)}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        referrerPolicy="no-referrer"
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
