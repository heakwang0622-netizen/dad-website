import Image from "next/image";

export const dynamic = "force-dynamic";

const sinkImages = Array.from({ length: 3 }, (_, i) => `/images/sink${i + 1}.jpg`);

export default function SinkBlockPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-blue-800 px-6 py-14 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-6xl">🚿</p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">씽크대 막힘, 당일 출동 당일 해결</h1>
          <p className="mt-4 text-blue-100">
            주방 배수 불량과 악취 문제를 신속하게 처리합니다.
            <br />
            정밀 진단 후 맞춤 장비로 막힘을 제거합니다.
          </p>
          <a href="tel:010-7553-2981" className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-base font-bold text-blue-800">
            지금 바로 전화하기 010-7553-2981
          </a>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {["주방 배수관 세척", "역류 원인 제거", "악취 개선"].map((item) => (
          <article key={item} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-blue-100">
            <h2 className="text-lg font-bold text-blue-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">생활 환경을 고려한 안전한 작업으로 문제를 해결합니다.</p>
          </article>
        ))}
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-black text-slate-900">현장 작업 사진</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {sinkImages.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-slate-200"
            >
              <Image
                src={src}
                alt={`씽크대 막힘 작업 사진 ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-black">작업 순서</h2>
        <p className="mt-3 text-slate-700">Step 1 증상 체크 → Step 2 배관 세척 작업 → Step 3 재점검 및 사용 안내</p>
      </div>
      <div className="rounded-xl bg-blue-50 px-6 py-5 text-center ring-1 ring-blue-200">
        <p className="text-lg font-bold text-blue-900">주방 막힘은 빠른 대응이 핵심입니다. 바로 상담 가능합니다.</p>
      </div>
    </section>
  );
}
