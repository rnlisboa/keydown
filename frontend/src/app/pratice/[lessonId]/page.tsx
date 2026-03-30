import Player from "@/src/components/layout/player/player";
import Image from "next/image";

export default function Lesson() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Player/>
    </div>
  );
}


// import React, { useState, useRef, useEffect } from 'react';
// import { VideoPlayer } from './components/VideoPlayer';
// import { TranscriptionArea } from './components/TranscriptionArea';
// import { SessionStats } from './components/SessionStats';
// import { TopNavigation } from './components/TopNavigation';
// import { ProgressBar } from './components/ProgressBar';

// // Mock data for training sentences
// const trainingData = [
//   {
//     id: 1,
//     videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//     sentence: 'The quick brown fox jumps over the lazy dog.',
//     duration: 3.5
//   },
//   {
//     id: 2,
//     videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
//     sentence: 'She sells seashells by the seashore.',
//     duration: 2.8
//   },
//   {
//     id: 3,
//     videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//     sentence: 'In the heart of darkness, knowledge becomes the light that guides us forward.',
//     duration: 4.2
//   },
//   {
//     id: 4,
//     videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
//     sentence: 'Practice makes perfect when learning a new language.',
//     duration: 3.1
//   }
// ];

// export default function App() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [userInput, setUserInput] = useState('');
//   const [isRevealing, setIsRevealing] = useState(false);
//   const [sessionStats, setSessionStats] = useState({
//     completed: 0,
//     totalAccuracy: 100,
//     streak: 0
//   });
//   const [showStats, setShowStats] = useState(true);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const currentItem = trainingData[currentIndex];
//   const progress = ((currentIndex + 1) / trainingData.length) * 100;

//   const handleReplay = () => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = 0;
//       videoRef.current.play();
//     }
//   };

//   const calculateAccuracy = (input: string, target: string): number => {
//     const inputWords = input.trim().toLowerCase().split(/\s+/);
//     const targetWords = target.trim().toLowerCase().split(/\s+/);
    
//     let correct = 0;
//     const minLength = Math.min(inputWords.length, targetWords.length);
    
//     for (let i = 0; i < minLength; i++) {
//       if (inputWords[i] === targetWords[i]) {
//         correct++;
//       }
//     }
    
//     return targetWords.length > 0 ? (correct / targetWords.length) * 100 : 0;
//   };

//   const handleContinue = () => {
//     const accuracy = calculateAccuracy(userInput, currentItem.sentence);
    
//     // Update session stats
//     setSessionStats(prev => ({
//       completed: prev.completed + 1,
//       totalAccuracy: ((prev.totalAccuracy * prev.completed) + accuracy) / (prev.completed + 1),
//       streak: accuracy >= 80 ? prev.streak + 1 : 0
//     }));

//     // Move to next item or loop back
//     if (currentIndex < trainingData.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setCurrentIndex(0);
//     }
    
//     setUserInput('');
//     setIsRevealing(false);
    
//     // Auto-play next video
//     setTimeout(() => {
//       if (videoRef.current) {
//         videoRef.current.play();
//       }
//     }, 300);
//   };

//   const handleReveal = () => {
//     setIsRevealing(true);
//     setUserInput(currentItem.sentence);
//   };

//   return (
//     <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] flex flex-col">
//       <TopNavigation onToggleStats={() => setShowStats(!showStats)} />
      
//       <div className="flex-1 flex">
//         {/* Main Content Area */}
//         <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
//           <div className="w-full max-w-5xl space-y-8">
//             {/* Progress Bar */}
//             <ProgressBar progress={progress} currentStep={currentIndex + 1} totalSteps={trainingData.length} />
            
//             {/* Video Player */}
//             <VideoPlayer 
//               ref={videoRef}
//               videoUrl={currentItem.videoUrl}
//               onReplay={handleReplay}
//             />
            
//             {/* Transcription Area */}
//             <TranscriptionArea
//               targetSentence={currentItem.sentence}
//               userInput={userInput}
//               onInputChange={setUserInput}
//               isRevealing={isRevealing}
//               accuracy={calculateAccuracy(userInput, currentItem.sentence)}
//             />
            
//             {/* Controls */}
//             <div className="flex items-center justify-center gap-6">
//               <button
//                 onClick={handleReplay}
//                 className="px-6 py-3 bg-[var(--color-charcoal)] hover:bg-[var(--color-navy)] border border-[var(--color-gold)]/20 text-[var(--color-text-primary)] transition-all duration-300 uppercase text-sm tracking-wider"
//                 style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
//               >
//                 ↺ Replay
//               </button>
              
//               <button
//                 onClick={handleReveal}
//                 className="px-6 py-3 bg-[var(--color-charcoal)] hover:bg-[var(--color-navy)] border border-[var(--color-gold)]/20 text-[var(--color-text-secondary)] transition-all duration-300 uppercase text-sm tracking-wider"
//                 style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
//               >
//                 Reveal
//               </button>
              
//               <button
//                 onClick={handleContinue}
//                 className="px-8 py-3 bg-[var(--color-gold)] hover:bg-[var(--color-amber)] border border-[var(--color-gold)] text-[var(--color-bg-primary)] transition-all duration-300 uppercase text-sm tracking-wider"
//                 style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
//               >
//                 Continue →
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Side Stats Panel */}
//         {showStats && (
//           <SessionStats 
//             stats={sessionStats}
//             currentAccuracy={calculateAccuracy(userInput, currentItem.sentence)}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

