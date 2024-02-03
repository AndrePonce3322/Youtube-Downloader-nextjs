import ButtonsDescription from './buttons-description';
import ContentDescription from './content-description';
import LinkToAuthorDescription from './link-to-author-description';
import ViewsAndPublished from './views-published';

interface VideoDescriptionProps {
  description: string;
  publishDate: Date;
  viewCount: string;
  name: string;
  channel_url: string;
  subscriber_count: number;
  thumbnail: string;
  title: string;
}

export default function Description({
  description,
  publishDate,
  viewCount,
  name,
  channel_url,
  subscriber_count,
  thumbnail,
  title,
}: VideoDescriptionProps) {
  return (
    <div className='w-full rounded-md bg-[#f2f2f2] dark:bg-[#272727] p-2 relative pb-8 mt-2 md:mt-1'>
      <ViewsAndPublished publishDate={publishDate} viewCount={viewCount} />
      <ContentDescription description={description} />
      <LinkToAuthorDescription
        authorName={name}
        channel_url={channel_url}
        subscriber_count={subscriber_count}
        thumbnail={thumbnail}
        title={title}
      />
      <ButtonsDescription />
    </div>
  );
}
