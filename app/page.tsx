"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const trustPoints = [
  {
    emoji: "🚨",
    title: "24시 긴급출동",
    lines: [
      "서울 · 경기 · 인천 지역 30분이면 도착!",
      "출장비 무료! 야간/주말/공휴일 추가요금 없이",
      "언제든 바로 출동합니다.",
    ],
  },
  {
    emoji: "🔧",
    title: "20년 이상 경력자 팀",
    lines: [
      "단순 수리가 아닌 근본 원인을 찾아 해결합니다.",
      "내시경 카메라 · 열화상 장비 · 고압세척기 등",
      "전문 장비로 정확하게 진단합니다.",
    ],
  },
  {
    emoji: "💰",
    title: "합리적인 비용",
    lines: [
      "현장 확인 후 작업 전에 비용을 먼저 안내드립니다.",
      "숨겨진 추가요금 없이 투명하게 운영합니다.",
    ],
  },
];

const faqs = [
  {
    q: "방문 가능 지역은 어디인가요?",
    a: "서울 전 지역, 경기도, 인천 지역 방문 가능합니다. 그 외 지역도 상담 후 조율 가능하니 언제든 문의주세요.",
  },
  {
    q: "비용은 어떻게 결정되나요?",
    a: "현장 상황에 따라 달라지며, 작업 전 반드시 비용을 먼저 안내드립니다. 출장비는 무료이며 숨겨진 추가요금은 없습니다.",
  },
  {
    q: "업체를 선택할 때 어떤 점을 확인해야 하나요?",
    a: "출장비 무료 여부, 작업 전 견적 안내 여부, 경력과 장비 보유 여부를 확인하세요. 저희는 세 가지 모두 충족합니다.",
  },
  {
    q: "작업 후 하자가 생기면 어떻게 하나요?",
    a: "작업 완료 후 일정 기간 내 동일 문제 발생 시 무상 재방문 서비스를 제공합니다.",
  },
  {
    q: "예약은 어떻게 하나요?",
    a: "전화(010-7553-2981) 또는 카카오톡 문의로 바로 접수 가능합니다. 24시간 운영합니다.",
  },
];

const reviewSlides = [
  {
    images: ["/images/work1.jpg", "/images/frozen3.jpg"] as const,
    quotes: [
      {
        text: "하수구 막힘이 심했는데 원인 진단부터 처리까지 빠르고 깔끔했습니다.",
        author: "서울 마포구 고객",
      },
      {
        text: "동파 복구도 신속하게 해주셔서 겨울에도 안심하고 이용했습니다.",
        author: "경기 고양시 고객",
      },
    ],
  },
  {
    images: ["/images/sink2.jpg", "/images/pipe1.jpg"] as const,
    quotes: [
      {
        text: "씽크대 배수 문제가 깔끔하게 해결됐고 악취도 사라졌어요.",
        author: "인천 부평구 고객",
      },
      {
        text: "고압세척으로 막힌 하수구가 금방 뚫려서 만족스러웠습니다.",
        author: "서울 서대문구 고객",
      },
    ],
  },
  {
    images: ["/images/work10.jpg", "/images/frozen1.jpg"] as const,
    quotes: [
      {
        text: "현장 설명이 명확하고 작업 후 정리까지 꼼꼼했습니다.",
        author: "경기 부천시 고객",
      },
      {
        text: "동파 배관 긴급 출동도 빠르고 작업 후 누수 여부까지 확인해 주셨습니다.",
        author: "경기 성남시 고객",
      },
    ],
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviewSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviewSlides.length) % reviewSlides.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewSlides.length);
  };

  return (
    <section className="space-y-10">
      <div className="flex min-h-screen items-center justify-center rounded-2xl border border-blue-100 bg-slate-50 px-6 py-14 sm:px-8">
        <div className="w-full max-w-4xl text-center">
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

      <section className="rounded-2xl bg-gray-50 px-6 py-10 sm:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-black text-slate-900">작업 후기</h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="rounded-full border border-blue-200 bg-white px-3 py-2 text-lg font-bold text-blue-700 hover:bg-blue-50"
              aria-label="이전 후기"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              className="rounded-full border border-blue-200 bg-white px-3 py-2 text-lg font-bold text-blue-700 hover:bg-blue-50"
              aria-label="다음 후기"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {reviewSlides.map((slide, slideIndex) => (
              <article key={slideIndex} className="w-full shrink-0 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {slide.images.map((src, photoIndex) => (
                    <div
                      key={src}
                      className="relative h-52 overflow-hidden rounded-xl sm:h-64 md:h-72"
                    >
                      <Image
                        src={src}
                        alt={`작업 후기 사진 ${slideIndex + 1}-${photoIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 45vw, 450px"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-lg text-amber-400">⭐⭐⭐⭐⭐</p>
                <div className="mt-3 space-y-4">
                  {slide.quotes.map((quote) => (
                    <div key={quote.author + quote.text.slice(0, 16)}>
                      <p className="text-base font-medium text-slate-800">{quote.text}</p>
                      <p className="mt-1 text-sm font-semibold text-blue-700">{quote.author}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 px-6 py-12 text-white shadow-lg sm:px-8">
        <h2 className="mb-8 text-center text-2xl font-black tracking-tight sm:text-3xl">신뢰 포인트</h2>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {trustPoints.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl bg-white/95 p-6 text-slate-900 shadow-md ring-1 ring-white/20"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-5xl leading-none" aria-hidden>
                  {item.emoji}
                </span>
              </div>
              <h3 className="text-lg font-bold text-blue-900">{item.title}</h3>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white px-6 py-12 shadow-sm ring-1 ring-slate-200 sm:px-8">
        <h2 className="mb-8 text-center text-3xl font-black text-slate-900 sm:text-4xl">자주 묻는 질문 (FAQ)</h2>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={item.q} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-slate-900 hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span>Q{index + 1}. {item.q}</span>
                  <span className="shrink-0 text-xl text-blue-600">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-4 pt-2 text-sm leading-relaxed text-slate-600">
                    A. {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </section>
  );
}
