export default function ContactPage() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-bold">문의하기</h1>
        <p className="mt-3 text-slate-600">
          급한 문제는 전화 상담이 가장 빠릅니다. 접수 후 출동 가능 시간을 바로 안내드립니다.
        </p>
        <div className="mt-5 space-y-2 text-sm text-slate-700">
          <p>대표번호: 010-7553-2981</p>
          <p>운영시간: 24시간 긴급 출동</p>
          <p>서비스 지역: 서울/경기 (신촌 인근 우선 출동)</p>
        </div>
        <div className="mt-5 flex h-40 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-100 text-sm text-slate-500">
          문의/현장 지도 이미지 자리 (추후 교체)
        </div>
      </div>

      <form className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-xl font-semibold">온라인 접수</h2>
        <div className="mt-4 space-y-3">
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            placeholder="이름"
            type="text"
          />
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            placeholder="연락처"
            type="tel"
          />
          <textarea
            className="h-32 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            placeholder="문의 내용을 입력해주세요."
          />
          <button
            type="button"
            className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800"
          >
            문의 접수 (백엔드 연동 예정)
          </button>
        </div>
      </form>
    </section>
  );
}
