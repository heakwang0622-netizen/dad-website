import Image from "next/image";

export const dynamic = "force-dynamic";

const showcasePhotos = ["/images/leak1.jpg", "/images/leak2.jpg", "/images/leak3.jpg"];

export default function LeakDetectionPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-blue-800 px-6 py-14 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-6xl">💧</p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">
            보이지 않는 누수, 열화상 카메라로 정확히 찾아냅니다
          </h1>
          <p className="mt-4 text-blue-100">
            숨은 누수 지점을 빠르게 진단하고 불필요한 철거를 줄입니다.
            <br />
            주거·상가·건물 누수 문제를 신속하게 해결합니다.
          </p>
          <a
            href="tel:010-7553-2981"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-base font-bold text-blue-800"
          >
            지금 바로 전화하기 010-7553-2981
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {["열화상 진단", "비파괴 탐지", "재발 방지 안내"].map((item) => (
          <article key={item} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-blue-100">
            <h2 className="text-lg font-bold text-blue-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">현장 상황에 맞는 전문 장비와 경험으로 정확하게 진행합니다.</p>
          </article>
        ))}
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-black">작업 순서</h2>
        <p className="mt-3 text-slate-700">Step 1 상담 접수 → Step 2 현장 정밀 진단 → Step 3 누수 해결 및 점검</p>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-black text-slate-900">실제 작업 사진</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {showcasePhotos.map((src, i) => (
            <div
              key={src}
              className="relative h-56 rounded-xl bg-slate-100 ring-1 ring-slate-200 sm:h-64 md:h-72"
            >
              <Image
                src={src}
                alt={`누수탐지 실제 작업 사진 ${i + 1}`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-blue-50 px-6 py-5 text-center ring-1 ring-blue-200">
        <p className="text-lg font-bold text-blue-900">누수는 시간 지체가 비용 증가로 이어집니다. 지금 바로 상담하세요.</p>
      </div>
    </section>
  );
}
