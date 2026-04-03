import React, { forwardRef } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  onReplay: () => void;
}

export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ videoUrl, onReplay }, ref) => {
    return (
      <div className="relative w-full max-w-3xl aspect-video overflow-hidden mx-auto"
        style={{ 
          backgroundColor: 'rgba(37, 26, 51, 0.6)',
          clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
          boxShadow: 'var(--shadow-art-deco)'
        }}
      >
        {/* Art Deco Corner Ornaments */}
        <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none z-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path 
              d="M 0,25 L 0,0 L 25,0 L 20,5 L 5,5 L 5,20 Z" 
              fill="var(--color-gold)" 
              opacity="0.3"
            />
            <line x1="0" y1="30" x2="10" y2="20" stroke="var(--color-gold)" strokeWidth="1" opacity="0.3" />
            <line x1="20" y1="10" x2="30" y2="0" stroke="var(--color-gold)" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>
        
        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none z-10 rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path 
              d="M 0,25 L 0,0 L 25,0 L 20,5 L 5,5 L 5,20 Z" 
              fill="var(--color-gold)" 
              opacity="0.3"
            />
            <line x1="0" y1="30" x2="10" y2="20" stroke="var(--color-gold)" strokeWidth="1" opacity="0.3" />
            <line x1="20" y1="10" x2="30" y2="0" stroke="var(--color-gold)" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>
        
        {/* Video Element */}
        <video
          ref={ref}
          src={videoUrl}
          className="w-full h-full object-cover"
          controls
          playsInline
        />
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/40 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }
);

VideoPlayer.displayName = 'VideoPlayer';