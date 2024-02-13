'use client';

import useComments from '@/hooks/useComments';
import CommentList from './comment-list';
import CommentsHeader from './comments-header';

export default function Comments({ videoId }: { videoId: string }) {
  const comments = useComments({ videoId });

  if (!comments) return null;

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
