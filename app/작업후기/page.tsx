import Image from "next/image";

const reviewCards = [
  {
    title: "하수구 막힘 해결 후기",
    text: "배수 역류가 심했는데 당일 출동으로 깔끔하게 해결해주셨습니다.",
    author: "서울 마포구 고객",
    image: "/images/배관123.jpg",
  },
  {
    title: "누수탐지 후기",
    text: "열화상 장비로 누수 위치를 정확히 찾아 공사 범위를 줄일 수 있었습니다.",
    author: "경기 고양시 고객",
    image: "",
  },
  {
    title: "변기 막힘 응급처치 후기",
    text: "야간에도 빠르게 도착해 문제를 바로 해결해 주셔서 안심됐습니다.",
    author: "인천 부평구 고객",
    image: "",
  },
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

      <div className="grid gap-4 md:grid-cols-3">
        {reviewCards.map((card) => (
          <article key={card.title} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            {card.image ? (
              <div className="relative h-44 overflow-hidden rounded-lg">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
            ) : (
              <div className="flex h-44 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-100 text-sm text-slate-500">
                후기 이미지 자리
              </div>
            )}
            <p className="mt-3 text-amber-400">⭐⭐⭐⭐⭐</p>
            <h3 className="mt-1 text-base font-bold text-slate-900">{card.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{card.text}</p>
            <p className="mt-2 text-sm font-semibold text-blue-700">{card.author}</p>
          </article>
        ))}
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
