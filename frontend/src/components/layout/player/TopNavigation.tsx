import React from 'react';

interface TopNavigationProps {
  onToggleStats: () => void;
}

export function TopNavigation({ onToggleStats }: TopNavigationProps) {
  return (
    <nav className="border-b border-[var(--color-gold)]/10 bg-[var(--color-bg-secondary)]/50 backdrop-blur-sm">
      <div className="px-8 py-4 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 bg-[var(--color-gold)] flex items-center justify-center"
            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          >
            <span className="text-[var(--color-bg-primary)] font-bold text-xl">L</span>
          </div>
          <h1 className="text-[var(--color-text-primary)] tracking-[0.15em]">
            LISTENING LAB
          </h1>
        </div>
        
        {/* Navigation Items */}
        <div className="flex items-center gap-6">
          <button className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors text-sm uppercase tracking-wider">
            Dashboard
          </button>
          <button className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors text-sm uppercase tracking-wider">
            Lessons
          </button>
          <button 
            onClick={onToggleStats}
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors text-sm uppercase tracking-wider"
          >
            Stats
          </button>
          <div 
            className="w-8 h-8 bg-[var(--color-charcoal)] border border-[var(--color-gold)]/30 flex items-center justify-center cursor-pointer hover:border-[var(--color-gold)]/60 transition-all"
            style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
          >
            <span className="text-[var(--color-gold)] text-xs">U</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
