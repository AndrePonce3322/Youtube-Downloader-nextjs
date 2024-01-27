'use client';

import useComments from '@/hooks/useComments';
import CommentList from './comment-list';
import CommentsHeader from './comments-header';
import CardSkeleton from '@/components/skeletons/card-skeleton';

export default function Comments({ videoId }: { videoId: string }) {
  const comments = useComments({ videoId });

  if (!comments)
    return Array.from({ length: 7 }).map((_, i) => <CardSkeleton key={i} />);

  return (
    <section className='flex flex-col gap-5'>
      {comments?.items && (
        <CommentsHeader commentsLength={comments.items.length} />
      )}

      <div className='w-full flex flex-col gap-10'>
        {videoId && comments?.items && <CommentList comments={comments} />}
      </div>
    </section>
  );
}
