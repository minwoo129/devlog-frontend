"use client";
import { MDXRemote } from "next-mdx-remote";
import { PostPageProps } from "./types";
import { MDXRemoteUIComponent } from "@/components/page/blog/detail";

export default function PostPage(args: PostPageProps) {
  const { data } = args;
  return (
    <div className="prose mt-10">
      <MDXRemote {...data} components={MDXRemoteUIComponent} />
    </div>
  );
}
