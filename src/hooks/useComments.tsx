'use client';

import { Comments } from '@/types/comments-props';
import { useEffect, useState } from 'react';

export default function useComments({ videoId }: { videoId: string }) {
  const [comments, setComments] = useState<Comments>();
  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/comments?q=${videoId}`);
      const data = (await res.json()) as Comments;
      setComments(data);
    })();
  }, [videoId]);

  return comments;
}
