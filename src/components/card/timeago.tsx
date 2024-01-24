'use client';
import moment from 'moment';
import 'moment/locale/es';

export default function CardTimeAgo({ time }: { time: Date }) {
  moment.locale('es');
  const timeAgo = moment(time).fromNow();

  return <time className='text-sm text-muted-foreground'>{timeAgo}</time>;
}
