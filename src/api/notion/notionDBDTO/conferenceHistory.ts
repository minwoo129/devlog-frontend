export type ConferenceHistory = {
  id: string;
  title: string;
  description: string;
  openedAt: string;
  keyTags: string[];
  conferenceURL: string | null;
  conferenceType: string;
  visible: boolean;
};