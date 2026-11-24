import { useState } from 'react';
import { Layers } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'U-GRAFIX Visual Asset',
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#141418] via-[#0D0D10] to-[#1A1A20] text-neutral-300 p-6 text-center select-none ${className}`}
      >
        <Layers className="w-8 h-8 text-[#C6FF00] mb-3" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-display text-sm font-medium tracking-tight text-white">
          {fallbackTitle}
        </span>
        <span className="font-mono text-xs text-neutral-400 mt-1">
          Press-Calibrated Asset
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
