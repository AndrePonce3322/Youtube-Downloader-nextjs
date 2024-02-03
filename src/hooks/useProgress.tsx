'use client';
import { progress$ } from '@/services/downloader-function';
import { useEffect, useState } from 'react';

export default function useProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const subscription = progress$.subscribe((percent) => {
      setProgress(percent);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [progress]);

  return progress;
}
