import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/common/navigation";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import RecoilProvider from "./RecoilProvider";
import isBetween from "dayjs/plugin/isBetween";

dayjs.locale("ko");

dayjs.extend(isBetween);

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
  );
}
