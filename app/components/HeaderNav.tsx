"use client";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { href: "/", label: "홈" },
  { href: "/leak-detection", label: "누수탐지" },
  { href: "/drain", label: "하수구막힘" },
  { href: "/sink", label: "씽크대막힘" },
  { href: "/toilet", label: "변기막힘" },
  { href: "/fire-pipe", label: "소방배관" },
  { href: "/frozen-pipe", label: "언수도녹임" },
  { href: "/reviews", label: "작업후기" },
  { href: "/contact", label: "문의하기" },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-md border border-blue-200 px-3 py-2 text-xl font-bold text-blue-700 md:hidden"
        aria-label="메뉴 열기"
        aria-expanded={open}
      >
        ☰
      </button>
      <nav className="hidden items-center gap-6 text-base font-medium md:flex">
        {menuItems.map((item) => (
          <Link key={item.label} href={item.href} className="text-slate-700 hover:text-blue-700">
            {item.label}
          </Link>
        ))}
      </nav>
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-t border-blue-100 bg-white shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border-b border-slate-100 py-3 text-base font-medium text-slate-700 hover:text-blue-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
