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
    <div className="w-full">
      <div className="flex items-center justify-end md:hidden">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md border border-blue-200 px-3 py-2 text-xl font-bold text-blue-700"
          aria-label="메뉴 열기"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      <nav className="hidden items-center justify-center gap-6 text-base font-medium md:flex">
        {menuItems.map((item) => (
          <Link key={item.label} href={item.href} className="text-slate-700 hover:text-blue-700">
            {item.label}
          </Link>
        ))}
      </nav>

      {open && (
        <nav className="mt-3 flex flex-col gap-2 rounded-lg border border-blue-100 bg-white p-3 text-base font-medium md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-2 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
