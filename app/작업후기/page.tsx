import Image from "next/image";

export const dynamic = "force-dynamic";

const reviewCards = [
  {
    image: "/images/work1.jpg",
    imageAlt: "고압세척 작업자",
    text: "하수구가 심하게 막혀서 연락드렸는데 30분도 안 돼서 오셔서 깔끔하게 해결해주셨어요. 냄새도 싹 사라졌습니다!",
    author: "서울 마포구 고객",
  },
  {
    image: "/images/work10.jpg",
    imageAlt: "곰팡이 제거 작업자",
    text: "누수로 인한 곰팡이 문제였는데 원인부터 찾아서 깔끔하게 처리해주셨어요. 전문가답습니다.",
    author: "서울 서대문구 고객",
  },
  {
    image: "/images/frozen11.jpg",
    imageAlt: "계량기 동파 해빙 작업",
    text: "한겨울에 수도가 얼어서 급하게 연락했는데 야간에도 바로 출동해주셨어요. 정말 감사합니다!",
    author: "경기 고양시 고객",
  },
  {
    image: "/images/work12.jpg",
    imageAlt: "실내 철거 작업자",
    text: "오래된 배관 전체 교체 작업이었는데 꼼꼼하게 잘 해주셨어요. 가격도 합리적이었습니다.",
    author: "인천 부평구 고객",
  },
  {
    image: "/images/work4.jpg",
    imageAlt: "철거 전 작업자",
    text: "씽크대 막힘으로 연락드렸는데 원인을 정확히 찾아서 재발 없이 해결해주셨어요.",
    author: "서울 은평구 고객",
  },
  {
    image: "/images/frozen7.jpg",
    imageAlt: "언수도 작업",
    text: "소방 배관 점검을 맡겼는데 법정 기준에 맞게 완벽하게 처리해주셨습니다. 믿을 수 있는 업체예요.",
    author: "서울 용산구 고객",
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

      <div>
        <h2 className="mb-4 text-2xl font-black text-slate-900">실제 작업 사진 · 고객 후기</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviewCards.map((card) => (
            <article
              key={card.image}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-lg text-amber-400" aria-hidden>
                  ⭐⭐⭐⭐⭐
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">{card.text}</p>
                <p className="mt-3 text-sm font-semibold text-blue-700">{card.author}</p>
              </div>
            </article>
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
