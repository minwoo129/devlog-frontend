import { FooterDirGridProps, FooterProps } from "../types";
import FooterLinkGrid from "./FooterLinkGrid";

export default function Footer(args: FooterProps) {
  const {} = args;
  return (
    <div className="footer">
      <FooterDirGrid dir="left" />
      <FooterDirGrid dir="right">
        <FooterLinkGrid />
      </FooterDirGrid>
    </div>
  );
}

const FooterDirGrid = (props: FooterDirGridProps) => {
  const { dir, children } = props;
  if (dir === "left") {
    return <div className="footerDirGridLeft">{children}</div>;
  }
  return <div className="footerDirGridRight">{children}</div>;
};
