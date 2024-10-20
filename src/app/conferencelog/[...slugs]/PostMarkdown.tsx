"use client";
import { PostMarkdownProps } from "./types";
import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteUIComponent } from "@/components/page/blog/detail";
import { classMerge } from "@/commonFunctions/tailwinds";

export default function PostMarkdown(args: PostMarkdownProps) {
  const { data } = args;
  const containerStyle = classMerge([
    "w-full",
    "lg1:w-full",
    "lg2:w-full",
    "xl1:w-[1000px]",
    "xl2:w-[1000px]",
    "vxl:w-[1000px]",
    "border-2 border-red-500",
  ]);
  return (
    <div className={containerStyle}>
      <div className="mdxArea">
        <MDXRemote {...data} components={MDXRemoteUIComponent} />
      </div>
    </div>
  );
}
