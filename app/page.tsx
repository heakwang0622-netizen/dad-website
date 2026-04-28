import Image from "next/image";

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
          <p className="text-2xl font-bold tracking-wide text-blue-700 sm:text-3xl">
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
        </div>
      </div>
    </section>
  );
}
