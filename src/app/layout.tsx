import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/common/navigation";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import RecoilProvider from "./RecoilProvider";

dayjs.locale("ko");

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RecoilProvider>
          <div className="flex flex-col w-screen max-h-screen overflow-hidden">
            <Navigation />
            {children}
          </div>
        </RecoilProvider>
      </body>
    </html>
  );
}
