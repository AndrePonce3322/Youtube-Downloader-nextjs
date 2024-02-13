'use client';

import CommentsCardSkeleton from '@/components/skeletons/comments-card-skeleton';
import useComments from '@/hooks/useComments';
import CommentList from './comment-list';
import CommentsHeader from './comments-header';

export default function Comments({ videoId }: { videoId: string }) {
  const comments = useComments({ videoId });

  if (!comments)
    return (
      <div className='flex flex-col gap-10 px-3 md:px-0 mt-3'>
        {Array.from({ length: 7 }).map((_, i) => (
          <CommentsCardSkeleton key={i} />
        ))}
      </div>
    );

  return (
    <section className='flex flex-col gap-5 px-3 md:px-0'>
      {comments?.items && (
        <CommentsHeader commentsLength={comments.items.length} />
      )}

      <div className='w-full flex flex-col gap-10 '>
        {videoId && comments?.items && <CommentList comments={comments} />}
      </div>
    </section>
  );
}
