export default function SkeletonWatchPage() {
  return (
    <div className='md:w-[750px] flex flex-col gap-3 px-2 md:px-0'>
      <div className='w-full h-5 bg-[#e3e3e3] dark:bg-muted rounded animate-pulse'></div>
      <div className='flex gap-5'>
        <div className='size-10 aspect-square bg-[#e3e3e3] dark:bg-muted rounded-full animate-pulse'></div>
        <div className='flex flex-col w-full gap-2'>
          <div className='w-3/4 md:w-1/4 h-3 bg-[#e3e3e3] dark:bg-muted rounded animate-pulse'></div>
          <div className='w-3/4 md:w-1/6 h-3 bg-[#e3e3e3] dark:bg-muted rounded animate-pulse'></div>
        </div>
        <div className='size-6 aspect-square bg-[#e3e3e3] dark:bg-muted rounded-full animate-pulse'></div>
        <div className='size-6 aspect-square bg-[#e3e3e3] dark:bg-muted rounded-full animate-pulse'></div>
        <div className='size-6 aspect-square bg-[#e3e3e3] dark:bg-muted rounded-full animate-pulse'></div>
      </div>

    </div>
  );
}
