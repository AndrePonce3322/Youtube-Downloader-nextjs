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

      <div className='mt-7 flex flex-col gap-2'>
        <h2 className='text-lg font-medium'>Transcripción</h2>
        <p className='text-muted-foreground'>
          Sigue el contenido con la transcripción.
        </p>
      </div>
    </>
  );
}
