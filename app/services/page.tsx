import Link from "next/link";

const serviceLinks = [
  { title: "누수탐지", href: "/누수탐지", desc: "열화상 기반 정밀 탐지 서비스" },
  { title: "하수구막힘", href: "/하수구막힘", desc: "막힘 원인 진단 및 고압세척" },
  { title: "씽크대막힘", href: "/씽크대막힘", desc: "주방 배수 문제 당일 대응" },
  { title: "변기막힘", href: "/변기막힘", desc: "긴급 막힘 해소 및 점검" },
  { title: "소방배관", href: "/소방배관", desc: "점검·보수·교체 대응" },
  { title: "언수도녹임", href: "/언수도녹임", desc: "동파 배관 복구 작업" },
  { title: "작업후기", href: "/작업후기", desc: "실제 고객 사례 모아보기" },
];

export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900">서비스 바로가기</h1>
        <p className="mt-2 text-slate-600">원하시는 서비스를 선택하면 상세 페이지로 이동합니다.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {serviceLinks.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-300 transition hover:-translate-y-0.5 hover:ring-blue-300"
          >
            <h2 className="text-xl font-bold text-slate-900">{service.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{service.desc}</p>
            <p className="mt-5 text-sm font-semibold text-blue-700">상세 보기 →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
