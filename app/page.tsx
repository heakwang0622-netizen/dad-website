import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="grid items-center gap-6 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-10 text-white shadow-xl sm:px-8 md:grid-cols-2 md:py-12">
        <div>
          <p className="text-sm font-bold tracking-wide text-blue-100">신촌종합설비</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            하수구막힘, 누수탐지, 소방배관
            <br />
            긴급 출동 전문 업체
          </h1>
          <p className="mt-4 max-w-xl text-blue-100">
            다년간의 현장 경험을 바탕으로 정확한 원인 진단과 신속한 문제 해결을 제공합니다.
            주거/상가/공장 설비 문제를 안전하게 처리합니다.
          </p>
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
            <div className="flex h-48 items-center justify-center rounded-lg border-2 border-dashed border-blue-200 bg-blue-50 text-sm text-slate-500">
              작업 전 사진 자리 (추후 교체)
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
