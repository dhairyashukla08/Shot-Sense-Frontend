import { useState, useCallback } from 'react';

export const useShutter = () => {
  const [isFlashing, setIsFlashing] = useState(false);

  const playShutter = useCallback(() => {
   
    const audio = new Audio('/sounds/camera-shutter.mp3');
    audio.volume = 0.4;
    audio.play();
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 150);
  }, []);

  return { playShutter, isFlashing };
};