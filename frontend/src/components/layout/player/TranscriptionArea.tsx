import { Inconsolata } from "next/font/google";
import React, { useEffect, useRef, useState } from 'react';


const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});


interface TranscriptionAreaProps {
  targetSentence: string;
  userInput: string;
  onInputChange: (value: string) => void;
  isRevealing: boolean;
  accuracy: number;
}

export function TranscriptionArea({ 
  targetSentence, 
  userInput, 
  onInputChange, 
  isRevealing,
  accuracy 
}: TranscriptionAreaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [targetSentence]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isRevealing) return;
    
    if (e.key === 'Backspace') {
      e.preventDefault();
      onInputChange(userInput.slice(0, -1));
    } else if (e.key.length === 1) {
      e.preventDefault();
      onInputChange(userInput + e.key);
    }
  };

  const renderCharacters = () => {
    const chars = targetSentence.split('');
    
    return chars.map((char, index) => {
      const userChar = userInput[index];
      const isTyped = index < userInput.length;
      const isCorrect = userChar === char;
      const isCurrent = index === userInput.length;
      
      let color = 'transparent';
      
      if (isRevealing) {
        color = 'var(--color-text-primary)';
      } else if (isCorrect) {
        color = 'var(--color-text-primary)';
      } else if (isTyped) {
        color = 'var(--color-error-text)';
      }
      
      return (
        <span
          key={index}
          className="relative inline-block transition-all duration-150"
          style={{ 
            color,
            textShadow: isCorrect && !isRevealing ? '0 0 8px var(--color-gold)' : 'none'
          }}
        >
          {isTyped ? userChar : char}
          
          {/* Cursor piscando */}
          {isCurrent && isFocused && !isRevealing && (
            <span 
              className="absolute -right-1 top-0 bottom-0 w-0.5 bg-[var(--color-gold)] animate-pulse"
              style={{ animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
            />
          )}
        </span>
      );
    });
  };

  return (
    <div className="space-y-6">
      {/* Input de Transcrição - estilo minimalista */}
      <div 
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full min-h-[100px] flex items-center justify-center px-12 py-8 cursor-text focus:outline-none bg-[var(--color-bg-primary)]"
      >
        <div className={`${inconsolata.className} text-3xl tracking-wide leading-relaxed text-center font-light select-none whitespace-pre-wrap`}>
          {renderCharacters()}
        </div>
      </div>
      
      {/* Accuracy indicator - minimalista */}
      <div className="flex items-center justify-center gap-4 text-sm">
        <span className="text-[var(--color-text-muted)] uppercase tracking-wider">Accuracy</span>
        <span 
          className="text-lg tracking-wider"
          style={{
            color: accuracy >= 80 
              ? 'var(--color-correct)' 
              : accuracy >= 50 
                ? 'var(--color-partial)' 
                : 'var(--color-error-text)'
          }}
        >
          {Math.round(accuracy)}%
        </span>
      </div>
    </div>
  );
}