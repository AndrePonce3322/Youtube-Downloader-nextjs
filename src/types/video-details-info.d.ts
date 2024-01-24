export interface VideoDetails {
  embed: Embed;
  title: string;
  description: string;
  lengthSeconds: string;
  ownerProfileUrl: string;
  externalChannelId: string;
  isFamilySafe: boolean;
  availableCountries: string[];
  isUnlisted: boolean;
  hasYpcMetadata: boolean;
  viewCount: string;
  category: string;
  publishDate: Date;
  ownerChannelName: string;
  liveBroadcastDetails: LiveBroadcastDetails;
  uploadDate: Date;
  videoId: string;
  keywords: string[];
  channelId: string;
  isOwnerViewing: boolean;
  isCrawlable: boolean;
  allowRatings: boolean;
  author: Author;
  isLowLatencyLiveStream: boolean;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  latencyClass: string;
  isLiveContent: boolean;
  media: Media;
  likes: null;
  dislikes: null;
  age_restricted: boolean;
  video_url: string;
  storyboards: Storyboard[];
  chapters: Chapter[];
  thumbnails: Thumbnail[];
}

export interface Author {
  id: string;
  name: string;
  user: string;
  channel_url: string;
  external_channel_url: string;
  user_url: string;
  thumbnails: Thumbnail[];
  verified: boolean;
  subscriber_count: number;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Chapter {
  title: string;
  start_time: number;
}

export interface Embed {
  iframeUrl: string;
  width: number;
  height: number;
}

export interface LiveBroadcastDetails {
  isLiveNow: boolean;
  startTimestamp: Date;
  endTimestamp: Date;
}

export interface Media {}

export interface Storyboard {
  templateUrl: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  thumbnailCount: number;
  interval: number;
  columns: number;
  rows: number;
  storyboardCount: number;
}
