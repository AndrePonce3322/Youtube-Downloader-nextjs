export default function SkeletonWatchPage() {
  return (
    <div className='w-[750px] flex flex-col gap-3'>
      <div className='w-full h-5 bg-[#e3e3e3] dark:bg-muted rounded-full animate-pulse'></div>
      <div className='flex gap-3'>
        <div className='size-10 aspect-square bg-[#e3e3e3] dark:bg-muted rounded-full animate-pulse'></div>
        <div className='flex flex-col w-full gap-1'>
          <div className='w-1/4 h-4 bg-[#e3e3e3] dark:bg-muted rounded-full animate-pulse'></div>
          <div className='w-1/6 h-4 bg-[#e3e3e3] dark:bg-muted rounded-full animate-pulse'></div>
        </div>
        <div className='size-6 aspect-square bg-[#e3e3e3] dark:bg-muted rounded-full animate-pulse'></div>
        <div className='size-6 aspect-square bg-[#e3e3e3] dark:bg-muted rounded-full animate-pulse'></div>
        <div className='size-6 aspect-square bg-[#e3e3e3] dark:bg-muted rounded-full animate-pulse'></div>
      </div>

      <div className='w-full h-[200px] rounded-md bg-[#e3e3e3] dark:bg-muted animate-pulse'></div>
    </div>
  );
}
