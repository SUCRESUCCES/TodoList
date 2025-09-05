import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | 뚜두두",
    default: "뚜두두",
  },
  description:
    "뚜두두 ✨ 오늘 하루를 몽글몽글 정리해보세요. 귀엽고 따뜻한 투두리스트 앱.",

  keywords: [
    "뚜두두",
    "투두리스트",
    "할 일 관리",
    "할 일 목록",
    "투두앱",
    "task manager",
    "todo list",
    "daily planner",
    "힐링 다이어리",
    "to-do",
  ],

  openGraph: {
    title: "뚜두두 | 귀여운 힐링 투두리스트 ✨",
    description:
      "오늘 해야 할 일, 뚜두두와 함께 가볍게 기록하고 성취감을 느껴보세요 💫",
    images: "/openGraph.png",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
