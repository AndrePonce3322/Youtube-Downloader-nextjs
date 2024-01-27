'use client';

import { Comments } from '@/types/comments-props';
import CommentCard from './comment-card';

export default function CommentList({
  comments,
}: {
  comments: Comments | undefined;
}) {
  if (!comments?.items || comments.items.length === 0)
    return <p>Sin comentarios</p>;

  return comments.items.map((comment: any) => (
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
