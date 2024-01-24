export default function CardSkeleton() {
  return (
    <div className='flex flex-col gap-2 group transition duration-300 active:bg-muted-foreground/10 p-1 rounded-md'>
      <div className='h-[225px] w-full rounded-md flex flex-col relative overflow-hidden bg-muted-foreground animate-pulse'></div>

      <div className='flex gap-2'>
        <div className='size-8 bg-muted-foreground animate-pulse rounded-full aspect-square'></div>

        {/* Title and author */}
        <div className='flex flex-col gap-1 w-full'>
          <div className='h-[16px] rounded-full bg-muted-foreground animate-pulse w-3/4'></div>
          <div className='h-[16px] w-2/4 bg-muted-foreground animate-pulse rounded-full'></div>
        </div>
      </div>
    </div>
  );
}
