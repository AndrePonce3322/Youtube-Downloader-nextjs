export interface RelatedVideos {
  id:                    string;
  title:                 string;
  published:             string;
  author:                Author;
  short_view_count_text: string;
  view_count:            string;
  length_seconds:        number;
  thumbnails:            Thumbnail[];
  richThumbnails:        Thumbnail[];
  isLive:                boolean;
}

export interface Author {
  id:          string;
  name:        string;
  user:        string;
  channel_url: string;
  user_url:    string;
  thumbnails:  Thumbnail[];
  verified:    boolean;
}

export interface Thumbnail {
  url:    string;
  width:  number;
  height: number;
}