export type YoutubeVideoData = {
  id: number;
  youtubeVideoId: string;
  title: string;
  description: string;
  thumbnailURL: string;
  embedURL: string;
  publishedAt: string;
  accessURL: string;
  videoType: "uploaded" | "live";
  visible: boolean;
};
