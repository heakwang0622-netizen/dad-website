import Image from "next/image";

export const dynamic = "force-dynamic";

const galleryImages = [
  ...Array.from({ length: 20 }, (_, i) => `/images/leak${i + 1}.jpg`),
  ...Array.from({ length: 13 }, (_, i) => `/images/frozen${i + 1}.jpg`),
  ...Array.from({ length: 4 }, (_, i) => `/images/pipe${i + 1}.jpg`),
  ...Array.from({ length: 3 }, (_, i) => `/images/sink${i + 1}.jpg`),
  "/images/work1.jpg",
  "/images/work10.jpg",
];

export default function WorkReviewPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-blue-800 px-6 py-14 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-6xl">📝</p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">실제 고객 작업 후기 모음</h1>
          <p className="mt-4 text-blue-100">
            신촌종합설비를 이용한 고객님의 실제 후기입니다.
            <br />
            서비스 품질과 대응 속도를 직접 확인해보세요.
          </p>
          <a href="tel:010-7553-2981" className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-base font-bold text-blue-800">
            지금 바로 전화하기 010-7553-2981
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {["실제 이용 후기", "사진 기반 사례", "지속적 만족도 관리"].map((item) => (
          <article key={item} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-blue-100">
            <h2 className="text-lg font-bold text-blue-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">고객 경험 중심으로 서비스를 점검하고 개선하고 있습니다.</p>
          </article>
        ))}
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-black text-slate-900">작업 사진 모아보기</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {galleryImages.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-slate-200"
            >
              <Image
                src={src}
                alt={`작업 사진 ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-black">작업 순서</h2>
        <p className="mt-3 text-slate-700">Step 1 상담 접수 → Step 2 현장 작업 진행 → Step 3 완료 후 후기 확인</p>
      </div>

      <div className="rounded-xl bg-blue-50 px-6 py-5 text-center ring-1 ring-blue-200">
        <p className="text-lg font-bold text-blue-900">후기로 검증된 신촌종합설비, 지금 바로 상담해보세요.</p>
      </div>
    </section>
  );
}
