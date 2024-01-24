'use client';

import { useEffect, useState } from 'react';
import CommentCard from './comment-card';
import { Comments } from '@/types/comments-props';

export default function CommentList({ videoId }: { videoId: string }) {
  const [comments, setComments] = useState<Comments>();
  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/comments?q=${videoId}`);
      const data = (await res.json()) as Comments;
      console.log(data);
      setComments(data);
    })();
  }, [videoId]);

  if (!comments?.items) return <p>Sin comentarios</p>;

  return comments.items.map((comment) => (
    <CommentCard
      key={comment.id}
      channelId={comment.snippet.topLevelComment.snippet.authorChannelId.value}
      comment={comment.snippet.topLevelComment.snippet.textOriginal}
      likeCount={comment.snippet.topLevelComment.snippet.likeCount}
      publishDate={comment.snippet.topLevelComment.snippet.publishedAt}
      thumbnail={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
      username={comment.snippet.topLevelComment.snippet.authorDisplayName}
    />
  ));
}
