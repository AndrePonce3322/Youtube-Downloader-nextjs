export interface PlayList {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface Item {
  kind: Kind;
  etag: string;
  id: string;
  snippet: Snippet;
}

export enum Kind {
  YoutubePlaylist = 'youtube#playlist',
}

export interface Snippet {
  publishedAt: Date;
  channelId: ChannelID;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: ChannelTitle;
  localized: Localized;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard?: Default;
  maxres?: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
