import * as mdx from "@mdx-js/react";

export const MDXRemoteUIComponent: React.ComponentProps<
  typeof mdx.MDXProvider
>["components"] = {
  h1: (props) => <h1 {...props}>{props.children}</h1>,
  h2: (props) => <h2 {...props}>{props.children}</h2>,
  h3: (props) => <h3 {...props}>{props.children}</h3>,
  h4: (props) => <h4 {...props}>{props.children}</h4>,
  a: (props) => (
    <a {...props} target="_blank">
      {props.children}
    </a>
  ),

  /*   aside: (props) => (
    <aside {...props} className="w-full px-5 py-3 rounded-md bg-gray-400">
      {props.children}
    </aside>
  ),
  p: (props) => (
    <p {...props} className="text-lg text-slate-900 mt-1">
      {props.children}
    </p>
  ),
  a: (props) => (
    <a
      {...props}
      className="text-lg text-slate-900 underline hover:text-orange-600"
    >
      {props.children}
    </a>
  ),
  ul: (props) => (
    <ul {...props} className="text-lg text-slate-900 mt-1">
      {props.children}
    </ul>
  ),
  li: (props) => (
    <li {...props} className="text-lg text-slate-900 mt-1">
      {props.children}
    </li>
  ), */
};
