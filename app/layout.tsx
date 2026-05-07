import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./components/HeaderNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "신촌종합설비 | 서대문구 누수탐지 하수구막힘 변기막힘 24시 출동",
  description:
    "서울 서대문구 신촌 종합설비. 누수탐지, 하수구막힘, 변기막힘, 씽크대막힘, 언수도녹임, 소방배관 전문. 24시간 긴급출동. 010-7553-2981",
  keywords:
    "신촌설비, 서대문구설비, 누수탐지, 하수구막힘, 변기막힘, 씽크대막힘, 언수도녹임, 소방배관, 24시출동, 긴급출동",
  openGraph: {
    title: "신촌종합설비 | 24시 긴급출동 설비전문",
    description: "서울 서대문구 신촌 종합설비. 누수탐지, 하수구막힘, 변기막힘 전문. 010-7553-2981",
    url: "https://sinchon-sulbi.com",
    siteName: "신촌종합설비",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "신촌종합설비 | 24시 긴급출동 설비전문",
    description: "서울 서대문구 신촌 종합설비. 누수탐지, 하수구막힘, 변기막힘 전문. 010-7553-2981",
  },
  icons: {
    icon: [{ url: "/icon.png?v=3", type: "image/png" }],
    apple: "/icon.png?v=3",
    shortcut: "/icon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
        />
        <meta name="naver-site-verification" content="691b9a24518d3a25475318dac8a7e893ce4090ec" />
        <link rel="icon" href="/icon.png?v=3" type="image/png" />
        <link rel="shortcut icon" href="/icon.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png?v=3" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <header className="relative border-b border-blue-100 bg-white">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
            <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
              <Image src="/icon.png" alt="신촌종합설비 로고" width={36} height={36} className="rounded-md" />
              <span className="text-2xl font-black tracking-tight text-slate-800">신촌종합설비</span>
            </Link>
            <HeaderNav />
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 pb-32 md:pb-28">{children}</main>
        <footer className="border-t border-slate-800 bg-slate-900 text-slate-200">
          <div className="mx-auto w-full max-w-6xl px-6 py-10">
            <div className="border-b border-slate-700 pb-5">
              <p className="text-2xl font-black tracking-tight text-white">신촌종합설비</p>
              <p className="mt-2 text-sm text-slate-300">24시간 긴급출동</p>
            </div>

            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <p>회사명: 신촌종합설비</p>
              <p>대표자: 이문학</p>
              <p>사업자등록번호: 196-19-02392</p>
              <p>주소: 서울시 서대문구 창천동 2-26</p>
              <p>대표번호: 010-7553-2981</p>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
              <a href="#" className="hover:text-white">
                개인정보처리방침
              </a>
              <span className="text-slate-500">|</span>
              <a href="#" className="hover:text-white">
                이용약관
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              copyright © 2026 신촌종합설비 All Rights Reserved.
            </p>
          </div>
        </footer>
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-700 bg-slate-900/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row">
            <a
              href="tel:010-7553-2981"
              className="flex-1 rounded-xl bg-blue-800 px-4 py-4 text-center text-base font-bold text-white shadow-lg hover:bg-blue-900"
            >
              📞 24시 빠른상담 바로 통화 010-7553-2981
            </a>
            <a
              href="#"
              className="flex-1 rounded-xl bg-yellow-400 px-4 py-4 text-center text-base font-bold text-slate-900 shadow-lg hover:bg-yellow-300"
            >
              💬 카톡 상담
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
