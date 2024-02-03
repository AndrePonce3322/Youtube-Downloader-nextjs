export type FilterProps = { type: 'audioonly' | 'videoonly' | 'audioandvideo' };
export type QualityProps = { type: 'highest' | 'lowest' };
export type formartProps = { type: 'mp3' | 'mp4' };

export interface Requirements {
  musicName: string;
  url: string;
  filter: FilterProps['type'];
  quality: QualityProps['type'];
  format: formartProps['type'];
}

export interface VideoFormatProps {
  filter: FilterProps['type'];
  quality: QualityProps['type'];
  format: formartProps['type'];
}
