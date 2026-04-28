import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-slate-50 px-6 py-14 sm:px-8">
        <Image
          src="/images/배관123.jpg"
          alt="배관 작업 배경 이미지"
          fill
          className="object-cover opacity-15 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 w-full max-w-4xl text-center">
          <p className="text-sm font-bold tracking-wide text-blue-700 sm:text-base">
            서울 · 경기 · 인천 24시간 긴급출동
          </p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-blue-900 sm:text-6xl md:text-7xl">
            신촌 종합설비
          </h1>
          <div className="mt-8">
            <a
              href="tel:010-7553-2981"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-blue-800 sm:w-auto"
            >
              📞 상담문의 : 010-7553-2981
            </a>
          </div>
          <p className="mt-8 text-base font-semibold text-slate-800 sm:text-lg">
            하수구 · 씽크대 · 변기 · 누수탐지 · 소방배관 · 언수도녹임 · 막힘 해결
          </p>
          <p className="mt-3 text-sm font-bold text-blue-700 sm:text-base">
            배관 내시경검사 · 고압세척 · 열화상 카메라 전문
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/services"
              className="rounded-lg border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
            >
              서비스 보기
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-blue-700 bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              문의하기
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { title: "하수구막힘", desc: "배관 내시경 점검 및 고압 세척" },
          { title: "누수탐지", desc: "열화상/청음 장비 기반 정밀 탐지" },
          { title: "소방배관", desc: "점검, 보수, 교체 및 유지 관리" },
        ].map((item) => (
          <article key={item.title} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-blue-100">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
          </article>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">작업 사진 (비포/애프터)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-blue-100">
            <p className="mb-3 text-sm font-semibold text-slate-700">비포 (Before)</p>
            <div className="relative h-48 overflow-hidden rounded-lg border border-blue-200 bg-blue-50">
              <Image
                src="/images/배관123.jpg"
                alt="배관 작업 전 현장 사진"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </article>
          <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-blue-100">
            <p className="mb-3 text-sm font-semibold text-slate-700">애프터 (After)</p>
            <div className="flex h-48 items-center justify-center rounded-lg border-2 border-dashed border-blue-200 bg-blue-50 text-sm text-slate-500">
              작업 후 사진 자리 (추후 교체)
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
