'use client';
import { length$ } from '@/services/downloader-function';
import { useEffect, useState } from 'react';

export const useLength = () => {
  const [length, setLength] = useState(0);

  useEffect(() => {
    const subscription = length$.subscribe((length) => {
      setLength(length);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return length;
};
