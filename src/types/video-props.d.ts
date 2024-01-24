export type FilterProps = { type: 'audioonly' | 'videoonly' | 'audioandvideo' };
export type QualityProps = { type: 'highest' | 'lowest' };

export interface Requirements {
  url: string;
  filter: FilterProps['type'];
  quality: QualityProps['type'];
}
