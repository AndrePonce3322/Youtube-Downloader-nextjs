'use client';

import { progress$ } from '@/services/downloader-function';
import { useEffect, useState } from 'react';

export const useProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const subscription = progress$.subscribe((value) => {
      setProgress(value);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return progress;
};
