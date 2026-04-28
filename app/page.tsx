import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const businessServices = [
    "누수탐지",
    "수도 냉·난방",
    "씽크대·하수구 뚫음",
    "소방 배관 설비",
    "변기·세면대 설치",
    "언수도 녹임(해빙)",
  ];

  return (
    <section className="space-y-10">
      <div className="grid items-center gap-6 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-10 text-white shadow-xl sm:px-8 md:grid-cols-2 md:py-12">
        <div className="rounded-xl border border-white/20 bg-white/10 p-5">
          <div className="flex items-center gap-2 text-sm font-bold tracking-wide text-blue-100">
            <span aria-hidden>🚰</span>
            <span aria-hidden>🔧</span>
            <span>신촌종합설비</span>
          </div>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            하수구막힘, 누수탐지, 소방배관
            <br />
            긴급 출동 전문 업체
          </h1>
          <p className="mt-4 max-w-xl text-blue-100">
            명함처럼 한눈에 보이는 서비스 구성과 전문 장비로
            빠르고 정확한 설비 솔루션을 제공합니다.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm font-semibold">
            {businessServices.map((service) => (
              <div key={service} className="rounded-md bg-white/15 px-3 py-2">
                {service}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md border border-red-300/70 bg-red-500 px-3 py-2 text-sm font-bold text-white">
            내시경 검사 / 고압세척 / 열화상 카메라
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-blue-900"
            >
              서비스 보기
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white px-4 py-2 text-center text-sm font-semibold text-white"
            >
              문의하기
            </Link>
          </div>
        </div>
        <div className="rounded-xl bg-white/10 p-4">
          <svg
            viewBox="0 0 420 300"
            className="h-56 w-full"
            role="img"
            aria-label="설비 작업 배관공 일러스트"
          >
            <rect x="0" y="0" width="420" height="300" rx="16" fill="#0B3A8F" />
            <circle cx="290" cy="90" r="36" fill="#F8D0A0" />
            <rect x="252" y="124" width="80" height="88" rx="16" fill="#F3F4F6" />
            <rect x="260" y="134" width="64" height="22" rx="8" fill="#1D4ED8" />
            <rect x="120" y="190" width="220" height="18" rx="9" fill="#93C5FD" />
            <rect x="80" y="175" width="58" height="48" rx="8" fill="#60A5FA" />
            <rect x="340" y="175" width="36" height="48" rx="8" fill="#60A5FA" />
            <circle cx="112" cy="199" r="10" fill="#DBEAFE" />
            <circle cx="358" cy="199" r="10" fill="#DBEAFE" />
            <path d="M170 170 L220 130 L258 162" fill="none" stroke="#E2E8F0" strokeWidth="10" />
            <rect x="146" y="62" width="64" height="16" rx="8" fill="#60A5FA" />
            <rect x="156" y="78" width="44" height="56" rx="12" fill="#BFDBFE" />
            <text x="24" y="42" fill="#DBEAFE" fontSize="18" fontWeight="700">
              PLUMBING SERVICE
            </text>
          </svg>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { title: "하수구막힘", desc: "배관 내시경 점검 및 고압 세척" },
          { title: "누수탐지", desc: "열화상/청음 장비 기반 정밀 탐지" },
          { title: "소방배관", desc: "점검, 보수, 교체 및 유지 관리" },
        ].map((item) => (
          <article key={item.title} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-blue-100">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
          </article>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">작업 사진 (비포/애프터)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-blue-100">
            <p className="mb-3 text-sm font-semibold text-slate-700">비포 (Before)</p>
            <div className="relative h-48 overflow-hidden rounded-lg border border-blue-200 bg-blue-50">
              <Image
                src="/images/배관123.jpg"
                alt="배관 작업 전 현장 사진"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </article>
          <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-blue-100">
            <p className="mb-3 text-sm font-semibold text-slate-700">애프터 (After)</p>
            <div className="flex h-48 items-center justify-center rounded-lg border-2 border-dashed border-blue-200 bg-blue-50 text-sm text-slate-500">
              작업 후 사진 자리 (추후 교체)
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
