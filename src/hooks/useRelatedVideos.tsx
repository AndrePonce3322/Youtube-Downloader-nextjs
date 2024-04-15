'use client';

import { RelatedVideosContext } from '@/context/related-videos';
import { useContext } from 'react';

export default function useRelatedVideos() {
  const { relatedVideos } = useContext(RelatedVideosContext);
  return relatedVideos;
}
