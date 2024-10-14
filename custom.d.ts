declare module "*.svg" {
  import React from "react";
  const svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default svg;
}
