export default function CardSkeleton() {
  return (
    <div className='flex flex-col gap-2 group transition duration-300 active:bg-[#e3e3e3]/10 p-1 rounded-md'>
      <div className='h-[225px] w-full rounded-md flex flex-col relative overflow-hidden bg-[#e3e3e3] dark:bg-muted animate-pulse'></div>

      <div className='flex gap-2'>
        <div className='size-8 bg-[#e3e3e3] dark:bg-muted animate-pulse rounded-full aspect-square'></div>

        {/* Title and author */}
        <div className='flex flex-col gap-1 w-full'>
          <div className='h-[16px] rounded-full bg-[#e3e3e3] dark:bg-muted animate-pulse w-3/4'></div>
          <div className='h-[16px] w-2/4 bg-[#e3e3e3] dark:bg-muted animate-pulse rounded-full'></div>
        </div>
      </div>
    </div>
  );
}
