import React from 'react';

interface ProgressBarProps {
  progress: number;
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ progress, currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--color-text-muted)] uppercase tracking-wider">Session Progress</span>
        <span className="text-[var(--color-gold)] tracking-wider">
          {currentStep} / {totalSteps}
        </span>
      </div>
      
      <div className="relative h-2 bg-[var(--color-bg-secondary)] overflow-hidden"
        style={{ clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)' }}
      >
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-amber)] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
        
        {/* Art Deco accent lines */}
        <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
          {Array.from({ length: totalSteps - 1 }).map((_, i) => (
            <div 
              key={i}
              className="w-px h-full bg-[var(--color-bg-primary)]/50"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
