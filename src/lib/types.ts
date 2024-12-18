export type GithubProfile = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string | string;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
};

export type PostMatter = {
  title: string;
  description: string;
  thumbnailURL: string;
  category1: string;
  category2: string;
  isTest: boolean;
  tags: string[];
  draft: boolean;
  date: string;
};

export type Post = PostMatter & {
  slug: string;
  slug1: string;
  content: string;
  readingMinutes: number;
};

export type sectionPostArgs<S, C> = {
  section: S;
  category: "all" | C;
};

export type detailPostArgs<S, C> = {
  section: S;
  category: C;
  post: string;
};
