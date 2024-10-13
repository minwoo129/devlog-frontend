import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Post, PostMatter } from "./types";
import dayjs from "dayjs";
import readingTime from "reading-time";
import {
  NavigationConferenceLogCategoryType,
  NavigationDevLogCategoryType,
  NavigationSectionType,
} from "@/components/common/navigation/navDatas";

const BASE_PATH = "/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const parsePost = (postPath: string) => {
  try {
    const file = fs.readFileSync(postPath, { encoding: "utf-8" });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;

    if (grayMatter.draft) {
      return null;
    }

    const postData: Post = {
      ...grayMatter,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format("YYYY-MM-DD"),
      content,
      slug: postPath.slice(postPath.indexOf(BASE_PATH)).replace(".mdx", ""),
      readingMinutes: Math.ceil(readingTime(content).minutes),
    };

    return postData;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export function getAllPosts() {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPaths.reduce<Post[]>((acc, postPath) => {
    const post = parsePost(postPath);
    if (!post) return acc;
    return [...acc, post];
  }, []);
}

type getFilteredPostsArgs =
  | {
      section: "devlog";
      category: "all" | NavigationDevLogCategoryType;
    }
  | {
      section: "conferencelog";
      category: "all" | NavigationConferenceLogCategoryType;
    };
export function getFilteredPosts(args: getFilteredPostsArgs) {
  const { section, category } = args;
  let posts = getAllPosts();
  posts = posts.filter((post) => post.category1 === section);
  if (category !== "all") {
    posts = posts.filter((post) => post.category2 === category);
  }
  return posts;
}
