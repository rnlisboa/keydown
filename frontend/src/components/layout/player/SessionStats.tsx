import React from 'react';

interface SessionStatsProps {
  stats: {
    completed: number;
    totalAccuracy: number;
    streak: number;
  };
  currentAccuracy: number;
}

export function SessionStats({ stats, currentAccuracy }: SessionStatsProps) {
  return (
    <aside className="w-80 bg-[var(--color-bg-secondary)] border-l border-[var(--color-gold)]/10 p-6 space-y-6">
      <div>
        <h2 className="text-[var(--color-gold)] mb-4 uppercase tracking-[0.1em]">
          Session Stats
        </h2>
        
        {/* Stats Grid */}
        <div className="space-y-4">
          {/* Current Accuracy */}
          <div 
            className="bg-[var(--color-bg-tertiary)] p-4 border border-[var(--color-gold)]/20"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            <div className="text-[var(--color-text-muted)] text-xs uppercase tracking-wider mb-2">
              Current
            </div>
            <div 
              className="text-3xl tracking-wider"
              style={{
                color: currentAccuracy >= 80 
                  ? 'var(--color-correct)' 
                  : currentAccuracy >= 50 
                    ? 'var(--color-partial)' 
                    : 'var(--color-error-text)'
              }}
            >
              {Math.round(currentAccuracy)}%
            </div>
          </div>
          
          {/* Completed */}
          <div 
            className="bg-[var(--color-bg-tertiary)] p-4 border border-[var(--color-gold)]/20"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            <div className="text-[var(--color-text-muted)] text-xs uppercase tracking-wider mb-2">
              Completed
            </div>
            <div className="text-3xl text-[var(--color-text-primary)] tracking-wider">
              {stats.completed}
            </div>
          </div>
          
          {/* Average Accuracy */}
          <div 
            className="bg-[var(--color-bg-tertiary)] p-4 border border-[var(--color-gold)]/20"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            <div className="text-[var(--color-text-muted)] text-xs uppercase tracking-wider mb-2">
              Average
            </div>
            <div className="text-3xl text-[var(--color-gold)] tracking-wider">
              {Math.round(stats.totalAccuracy)}%
            </div>
          </div>
          
          {/* Streak */}
          <div 
            className="bg-[var(--color-bg-tertiary)] p-4 border border-[var(--color-gold)]/20 relative overflow-hidden"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            {stats.streak > 0 && (
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/10 to-transparent"
              />
            )}
            <div className="relative">
              <div className="text-[var(--color-text-muted)] text-xs uppercase tracking-wider mb-2">
                Streak
              </div>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl text-[var(--color-gold)] tracking-wider">
                  {stats.streak}
                </div>
                {stats.streak > 0 && (
                  <div className="text-[var(--color-gold)] text-xl">🔥</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent History */}
      <div>
        <h3 className="text-[var(--color-text-secondary)] mb-3 uppercase text-sm tracking-wider">
          Quick Tips
        </h3>
        <div className="space-y-3 text-sm text-[var(--color-text-muted)]">
          <div className="flex items-start gap-2">
            <div className="w-1 h-1 bg-[var(--color-gold)] mt-2 flex-shrink-0" />
            <p>Listen carefully before typing</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1 h-1 bg-[var(--color-gold)] mt-2 flex-shrink-0" />
            <p>Focus on accuracy over speed</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1 h-1 bg-[var(--color-gold)] mt-2 flex-shrink-0" />
            <p>Replay as many times as needed</p>
          </div>
        </div>
      </div>
      
      {/* Art Deco decorative element */}
      <div className="pt-6 mt-6 border-t border-[var(--color-gold)]/10">
        <div className="flex items-center justify-center">
          <svg width="120" height="40" viewBox="0 0 120 40">
            <path 
              d="M 10,20 L 30,5 L 50,20 L 70,5 L 90,20 L 110,5" 
              stroke="var(--color-gold)" 
              strokeWidth="1" 
              fill="none"
              opacity="0.2"
            />
            <path 
              d="M 10,20 L 30,35 L 50,20 L 70,35 L 90,20 L 110,35" 
              stroke="var(--color-gold)" 
              strokeWidth="1" 
              fill="none"
              opacity="0.2"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
}
