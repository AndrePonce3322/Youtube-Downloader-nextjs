export default function ContentDescription({
  description,
}: {
  description: string;
}) {
  return (
    <>
      <pre className='font-sans mt-3 text-pretty text-[15px] break-words'>
        {description}
      </pre>

      <div className='mt-7 flex flex-col gap-1 md:gap-2'>
        <h2 className='md:text-lg font-medium'>Transcripción</h2>
        <p className='text-sm md:text-base text-muted-foreground'>
          Sigue el contenido con la transcripción.
        </p>
      </div>
    </>
  );
}
