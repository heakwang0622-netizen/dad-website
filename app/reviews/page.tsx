import Image from "next/image";

export const dynamic = "force-dynamic";

type ReviewCard = {
  title: string;
  rating: number;
  image: string;
  imageAlt: string;
  text: string;
  author: string;
};

const reviewCards: ReviewCard[] = [
  {
    title: "하수구 막힘 해결",
    rating: 5,
    image: "/images/work1.jpg",
    imageAlt:
      "[후기 사진] 하수구 막힘 해결 — 주방 배수구에서 진행한 막힘 제거·세척 작업 현장",
    text: "주방 하수구가 완전히 막혀서 연락드렸는데 1시간도 안 되어 도착하셨어요. 냄새까지 싹 잡아주셔서 정말 감사합니다!",
    author: "서울 마포구 고객",
  },
  {
    title: "누수탐지 및 배관 수리",
    rating: 5,
    image: "/images/work2.jpg",
    imageAlt:
      "[후기 사진] 누수탐지 및 배관 수리 — 장비로 누수 지점 확인 후 배관 보수한 현장",
    text: "벽 안에서 물 새는 소리가 났는데 장비로 정확히 위치 찾아주시고 최소한으로 뜯어 수리해주셨어요. 깔끔하게 마무리까지!",
    author: "경기 고양시 고객",
  },
  {
    title: "변기 막힘 응급처치",
    rating: 5,
    image: "/images/work3.jpg",
    imageAlt:
      "[후기 사진] 변기 막힘 응급처치 — 변기 막힘을 해소한 응급 작업 현장",
    text: "밤 11시에 변기가 막혀 급하게 연락했는데 야간에도 바로 출동해주셨어요. 30분 만에 해결! 정말 믿음직스럽습니다.",
    author: "인천 부평구 고객",
  },
  {
    title: "씽크대 배수 교체",
    rating: 5,
    image: "/images/work4.jpg",
    imageAlt:
      "[후기 사진] 씽크대 배수 교체 — 주방 씽크대 배수관을 새로 교체한 작업 현장",
    text: "씽크대 물이 역류해서 요청드렸는데 배수관까지 새것으로 교체해주셨어요. 작업 후 주변 정리도 깔끔하게 해주셔서 감동이었어요.",
    author: "서울 서대문구 고객",
  },
  {
    title: "얼은 수도관 해동",
    rating: 5,
    image: "/images/work5.jpg",
    imageAlt:
      "[후기 사진] 얼은 수도관 해동 — 동파된 수도관을 해동·복구한 작업 현장",
    text: "한파에 수도가 꽁꽁 얼어서 연락드렸는데 특수 장비로 빠르게 해동해주셨어요. 파이프 파열 없이 해결돼서 정말 다행이에요!",
    author: "경기 파주시 고객",
  },
  {
    title: "소방배관 점검 및 수리",
    rating: 5,
    image: "/images/work6.jpg",
    imageAlt:
      "[후기 사진] 소방배관 점검 및 수리 — 건물 소방배관 누수 점검 후 수리한 현장",
    text: "건물 소방배관 누수로 연락드렸는데 꼼꼼하게 점검 후 문제 부위만 정확히 수리해주셨어요. 전문성이 느껴졌습니다.",
    author: "서울 은평구 고객",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-lg leading-none text-yellow-400" aria-label={`별점 ${rating}점`}>
      {"★".repeat(rating)}
    </span>
  );
}

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
          <a
            href="tel:010-7553-2981"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-base font-bold text-blue-800"
          >
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviewCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-slate-100"
            >
              <div className="relative h-[200px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  width={600}
                  height={400}
                  className="h-[200px] w-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2">
                  <StarRating rating={card.rating} />
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">{card.text}</p>
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
