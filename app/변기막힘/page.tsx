import Image from "next/image";

export const dynamic = "force-dynamic";

const showcasePhotos = ["/images/work1.jpg", "/images/work2.jpg"];

export default function ToiletBlockPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-blue-800 px-6 py-14 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-6xl">🚽</p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">변기 막힘 응급처치, 30분 내 도착</h1>
          <p className="mt-4 text-blue-100">
            갑작스러운 변기 막힘과 역류 상황을 긴급 대응합니다.
            <br />
            야간·주말에도 동일하게 빠르게 출동합니다.
          </p>
          <a href="tel:010-7553-2981" className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-base font-bold text-blue-800">
            지금 바로 전화하기 010-7553-2981
          </a>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {["긴급 복구", "배관 내 이물 제거", "재발 방지 점검"].map((item) => (
          <article key={item} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-blue-100">
            <h2 className="text-lg font-bold text-blue-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">주거 환경 피해를 줄이는 빠른 작업을 우선합니다.</p>
          </article>
        ))}
      </div>
      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-black">작업 순서</h2>
        <p className="mt-3 text-slate-700">Step 1 긴급 접수 → Step 2 막힘 해소 작업 → Step 3 정상 배수 확인</p>
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
                alt={`변기 막힘 실제 작업 사진 ${i + 1}`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-blue-50 px-6 py-5 text-center ring-1 ring-blue-200">
        <p className="text-lg font-bold text-blue-900">긴급 상황일수록 경험 많은 업체 선택이 중요합니다.</p>
      </div>
    </section>
  );
}
