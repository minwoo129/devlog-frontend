"use client";
import { PostMarkdownProps } from "./types";
import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteUIComponent } from "@/components/page/blog/detail";

export default function PostMarkdown(args: PostMarkdownProps) {
  const { data } = args;
  return (
    <div className="px-[200px]">
      <div className="mdxArea">
        <MDXRemote {...data} components={MDXRemoteUIComponent} />
      </div>
    </div>
  );
}
