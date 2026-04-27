const services = [
  {
    title: "하수구막힘 해결",
    iconLabel: "DRAIN ICON",
    description:
      "가정, 상가, 공장 하수구 막힘을 고압 세척과 내시경 장비로 진단/해결합니다.",
    points: ["싱크대/화장실 배수 불량", "악취 및 역류 문제", "배관 상태 점검 리포트 제공"],
  },
  {
    title: "누수탐지",
    iconLabel: "LEAK ICON",
    description:
      "보이지 않는 누수 지점을 비파괴 방식으로 탐지해 불필요한 공사를 줄입니다.",
    points: ["열화상/청음 탐지", "배관 압력 테스트", "부분 보수 및 재발 방지 컨설팅"],
  },
  {
    title: "소방배관 공사",
    iconLabel: "FIRE PIPE ICON",
    description: "소방배관 점검, 교체, 보수 및 법정 점검 대응을 지원합니다.",
    points: ["노후 배관 교체", "누수/압력 저하 보수", "점검 서류 대응 안내"],
  },
];

export default function ServicesPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">서비스 안내</h1>
        <p className="mt-2 text-slate-600">
          현장 상황에 맞는 장비와 공정으로 신속하고 안전하게 작업합니다.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-300">
            <div className="mb-4 flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-100 text-xs font-bold tracking-wider text-slate-500">
              {service.iconLabel}
            </div>
            <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-300">
        <h2 className="text-xl font-semibold text-slate-900">서비스 작업 이미지 영역</h2>
        <p className="mt-2 text-sm text-slate-600">
          서비스별 대표 작업 사진을 추후 등록할 수 있는 플레이스홀더입니다.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-100 text-sm text-slate-500">
            하수구막힘 이미지
          </div>
          <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-100 text-sm text-slate-500">
            누수탐지 이미지
          </div>
          <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-100 text-sm text-slate-500">
            소방배관 이미지
          </div>
        </div>
      </article>
    </section>
  );
}
