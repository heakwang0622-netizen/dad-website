import type { Metadata } from "next";
import Link from "next/link";
import HeaderNav from "./components/HeaderNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "신촌종합설비",
  description: "하수구막힘, 누수탐지, 소방배관 전문 설비 서비스",
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
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <header className="border-b border-blue-100 bg-white">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
            <Link href="/" className="whitespace-nowrap text-2xl font-black tracking-tight text-slate-800">
              신촌종합설비
            </Link>
            <HeaderNav />
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 pb-32 md:pb-28">{children}</main>
        <footer className="border-t border-blue-100 bg-white">
          <div className="mx-auto w-full max-w-5xl px-6 py-4 text-sm text-slate-600">
            24시간 출동 상담 | 010-7553-2981 | 주소: 서울시 서대문구 창천동 2-26
          </div>
        </footer>
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-blue-100 bg-white/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row">
            <a
              href="tel:010-7553-2981"
              className="flex-1 rounded-xl bg-blue-800 px-4 py-4 text-center text-base font-bold text-white shadow-lg hover:bg-blue-900"
            >
              전화 연결 010-7553-2981
            </a>
            <a
              href="#"
              className="flex-1 rounded-xl bg-yellow-400 px-4 py-4 text-center text-base font-bold text-slate-900 shadow-lg hover:bg-yellow-300"
            >
              카카오톡 상담 (링크 예정)
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
