export interface Youtube {
  kind:          string;
  etag:          string;
  items:         Item[];
  nextPageToken: string;
  pageInfo:      PageInfo;
}

export interface Item {
  kind:           Kind;
  etag:           string;
  id:             string;
  snippet:        Snippet;
  contentDetails: ContentDetails;
  statistics:     Statistics;
}

export interface ContentDetails {
  duration:           string;
  dimension:          Dimension;
  definition:         Definition;
  caption:            string;
  licensedContent:    boolean;
  contentRating:      ContentRating;
  projection:         Projection;
  regionRestriction?: RegionRestriction;
}

export interface ContentRating {
}

export enum Definition {
  HD = "hd",
}

export enum Dimension {
  The2D = "2d",
}

export enum Projection {
  Rectangular = "rectangular",
}

export interface RegionRestriction {
  blocked: string[];
}

export enum Kind {
  YoutubeVideo = "youtube#video",
}

export interface Snippet {
  publishedAt:           Date;
  channelId:             string;
  title:                 string;
  description:           string;
  thumbnails:            Thumbnails;
  channelTitle:          string;
  tags?:                 string[];
  categoryId:            string;
  liveBroadcastContent:  LiveBroadcastContent;
  localized:             Localized;
  defaultAudioLanguage?: string;
  defaultLanguage?:      string;
}

export enum LiveBroadcastContent {
  None = "none",
}

export interface Localized {
  title:       string;
  description: string;
}

export interface Thumbnails {
  default:  Default;
  medium:   Default;
  high:     Default;
  standard: Default;
  maxres?:  Default;
}

export interface Default {
  url:    string;
  width:  number;
  height: number;
}

export interface Statistics {
  viewCount:     string;
  likeCount:     string;
  favoriteCount: string;
  commentCount?: string;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}