import moment from 'moment';
import 'moment/locale/es';
import ButtonWithTooltip from '../button-with-tooltip';

export default function ViewsAndPublished({
  viewCount,
  publishDate,
}: {
  viewCount: string;
  publishDate: Date;
}) {
  return (
    <div className='font-medium tracking-wide text-sm'>
      <span>{Number(viewCount).toLocaleString()} vistas</span>
      <span className='text-sm text-muted-foreground pl-2'>
        {moment(publishDate).format('LL')}
      </span>
    </div>
  );
}
