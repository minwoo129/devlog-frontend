import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { detailPostArgs, Post, PostMatter, sectionPostArgs } from "./types";
import dayjs from "dayjs";
import readingTime from "reading-time";
import { differenceWith } from "es-toolkit/array";
import {
  NavigationConferenceLogCategoryType,
  NavigationDevLogCategoryType,
} from "@/commonDatas/routes/types";

const BASE_PATH = "/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);
const SlugFilterData = ["", "posts", "test", "blog"];

const parsePost = (postPath: string) => {
  try {
    const file = fs.readFileSync(postPath, { encoding: "utf-8" });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;

    if (grayMatter.draft) {
      return null;
    }

    const slug = postPath
      .slice(postPath.indexOf(BASE_PATH))
      .replace(".mdx", "");
    const slugs = slug.split("/");
    const newSlugs = differenceWith(slugs, SlugFilterData, (a, b) => a === b);

    const postData: Post = {
      ...grayMatter,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format("YYYY-MM-DD HH:mm:ss"),
      content,
      slug,
      slug1: newSlugs.join("/"),
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
// ===================================================================================
type getFilteredPostsArgs =
  | sectionPostArgs<"devlog", NavigationDevLogCategoryType>
  | sectionPostArgs<"conferencelog", NavigationConferenceLogCategoryType>;
export function getFilteredPosts(args: getFilteredPostsArgs) {
  const { section, category } = args;
  let posts = getAllPosts();
  posts = posts.filter((post) => post.category1 === section);
  if (category !== "all") {
    posts = posts.filter((post) => post.category2 === category);
  }
  return posts;
}
// ===================================================================================
type getDetailPostArgs =
  | detailPostArgs<"devlog", NavigationDevLogCategoryType>
  | detailPostArgs<"conferencelog", NavigationConferenceLogCategoryType>;
export const getDetailPost = (args: getDetailPostArgs) => {
  const { section, category, post } = args;
  const posts = getAllPosts();
  const key = `/${section}/${category}/${post}`;
  const detailPost = posts.find((post) => post.slug1 === key);
  return detailPost;
};
