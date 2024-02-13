export default function CommentsCardSkeleton() {
  return (
    <div className='flex gap-2 md:gap-3 w-full' style={{ wordBreak: 'break-word' }}>
      <div className='size-9 md:size-11 aspect-square bg-[#e3e3e3] dark:bg-muted rounded-full'></div>

      <div className='flex flex-col gap-3 w-full'>
        <div className='w-32 h-3 bg-[#e3e3e3] dark:bg-muted rounded'></div>
        <div className='w-2/4 h-3 bg-[#e3e3e3] dark:bg-muted rounded'></div>
      </div>
    </div>
  );
}
