import Image from "next/image";

export const dynamic = "force-dynamic";

const showcasePhotos = ["/images/pipe1.jpg", "/images/pipe2.jpg"];

export default function DrainBlockPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-blue-800 px-6 py-14 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-6xl">🛠️</p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">막힌 하수구, 고압세척으로 시원하게 뚫어드립니다</h1>
          <p className="mt-4 text-blue-100">
            악취·역류·배수 불량 문제를 원인부터 해결합니다.
            <br />
            가정과 상가 모두 신속 출동 가능합니다.
          </p>
          <a href="tel:010-7553-2981" className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-base font-bold text-blue-800">
            지금 바로 전화하기 010-7553-2981
          </a>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {["고압세척", "내시경 확인", "배관 상태 점검"].map((item) => (
          <article key={item} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-blue-100">
            <h2 className="text-lg font-bold text-blue-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">현장 맞춤 공정으로 빠르고 깔끔하게 작업합니다.</p>
          </article>
        ))}
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-black">작업 순서</h2>
        <p className="mt-3 text-slate-700">Step 1 막힘 증상 확인 → Step 2 장비 투입 및 세척 → Step 3 배수 테스트 완료</p>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-black text-slate-900">실제 작업 사진</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {showcasePhotos.map((src, i) => (
            <div
              key={src}
              className="relative h-56 rounded-xl bg-slate-100 ring-1 ring-slate-200 sm:h-64 md:h-72"
            >
              <Image
                src={src}
                alt={`하수구 막힘 실제 작업 사진 ${i + 1}`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-blue-50 px-6 py-5 text-center ring-1 ring-blue-200">
        <p className="text-lg font-bold text-blue-900">반복 막힘까지 고려해 재발 방지 솔루션을 안내합니다.</p>
      </div>
    </section>
  );
}
