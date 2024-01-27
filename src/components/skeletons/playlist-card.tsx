export default function PlayListCardSkeleton() {
  return (
    <div className='flex gap-2'>
      <div className='aspect-video min-w-44 w-44 rounded-md animate-pulse bg-[#e3e3e3] dark:bg-muted'></div>
      <div className='flex flex-col gap-1 w-full'>
        <div className='w-full rounded-full animate-pulse bg-[#e3e3e3] dark:bg-muted h-3'></div>
        <div className='w-3/4 rounded-full animate-pulse bg-[#e3e3e3] dark:bg-muted h-3 mt-[2px]'></div>
        <div className='mt-2 w-1/2 rounded-full animate-pulse bg-[#e3e3e3] dark:bg-muted h-3'></div>
        <div className='mt-1 w-2/3 rounded-full animate-pulse bg-[#e3e3e3] dark:bg-muted h-3 '></div>
      </div>
    </div>
  );
}
