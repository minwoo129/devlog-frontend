import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/common/navigation";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import UnifiedProvider from "./unifiedProvider";

dayjs.locale("ko");
dayjs.extend(isBetween);

export const metadata: Metadata = {
  title: {
    template: " %s | Mwoo Devlog",
    default: "Mwoo Devlog",
  },
  description:
    "개발, 국내외 개발 컨퍼런스 등 제가 관심을 가지고 있는 주제들을 다루는 블로그입니다.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <UnifiedProvider>
      <html lang="en">
        <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex flex-col w-screen h-screen overflow-hidden">
            <Navigation />
            {children}
            {modal}
            <div id="modal-root" />
          </div>
        </body>
      </html>
    </UnifiedProvider>
  );
}
