'use client';
import { VideosContext } from '@/context/videos';
import { useContext } from 'react';

export default function useVideos() {
  const { videos } = useContext(VideosContext);
  return videos;
}
