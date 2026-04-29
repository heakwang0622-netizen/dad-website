export default function FrozenPipePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-blue-800 px-6 py-14 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-6xl">❄️</p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">동파된 수도관, 열선 장비로 빠르게 녹여드립니다</h1>
          <p className="mt-4 text-blue-100">
            겨울철 언수도 문제를 안전하게 복구해 드립니다.
            <br />
            배관 손상 최소화 공정으로 빠르게 정상 사용을 돕습니다.
          </p>
          <a href="tel:010-7553-2981" className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-base font-bold text-blue-800">
            지금 바로 전화하기 010-7553-2981
          </a>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {["열선 장비 작업", "동파 지점 점검", "재동결 방지"].map((item) => (
          <article key={item} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-blue-100">
            <h2 className="text-lg font-bold text-blue-900">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">계절·환경 조건을 고려해 안정적인 복구를 진행합니다.</p>
          </article>
        ))}
      </div>
      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-black">작업 순서</h2>
        <p className="mt-3 text-slate-700">Step 1 동파 상태 확인 → Step 2 열선 장비 복구 → Step 3 누수 점검 및 마무리</p>
      </div>
      <div className="rounded-xl bg-blue-50 px-6 py-5 text-center ring-1 ring-blue-200">
        <p className="text-lg font-bold text-blue-900">언수도는 빠른 복구가 핵심입니다. 즉시 상담 가능합니다.</p>
      </div>
    </section>
  );
}
