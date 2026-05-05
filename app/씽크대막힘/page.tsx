import Image from "next/image";
import type { Metadata } from "next";



export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "씽크대막힘 해결 | 신촌종합설비",
  description: "서대문구 씽크대막힘 전문. 배수관 교체 및 수리. 010-7553-2981",
};



const showcasePhotos = ["/images/sink1.jpg", "/images/sink2.jpg"];



export default function SinkBlockPage() {

  return (

    <section className="space-y-8">

      <div className="rounded-2xl bg-blue-800 px-6 py-14 text-white">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-6xl">🚿</p>

          <h1 className="mt-4 text-4xl font-black sm:text-5xl">씽크대 막힘, 당일 출동 당일 해결</h1>

          <p className="mt-4 text-blue-100">

            주방 배수 불량과 악취 문제를 신속하게 처리합니다.

            <br />

            정밀 진단 후 맞춤 장비로 막힘을 제거합니다.

          </p>

          <a href="tel:010-7553-2981" className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-base font-bold text-blue-800">

            지금 바로 전화하기 010-7553-2981

          </a>

        </div>

      </div>

      <div className="grid gap-4 md:grid-cols-3">

        {["주방 배수관 세척", "역류 원인 제거", "악취 개선"].map((item) => (

          <article key={item} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-blue-100">

            <h2 className="text-lg font-bold text-blue-900">{item}</h2>

            <p className="mt-2 text-sm text-slate-600">생활 환경을 고려한 안전한 작업으로 문제를 해결합니다.</p>

          </article>

        ))}

      </div>



      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

        <h2 className="text-2xl font-black">작업 순서</h2>

        <p className="mt-3 text-slate-700">Step 1 증상 체크 → Step 2 배관 세척 작업 → Step 3 재점검 및 사용 안내</p>

      </div>



      <div>

        <h2 className="mb-4 text-2xl font-black text-slate-900">실제 작업 사진</h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

          {showcasePhotos.map((src, i) => (

            <div

              key={src}

              className="relative h-56 rounded-xl bg-slate-100 ring-1 ring-slate-200 sm:h-64 md:h-72"

            >

              <Image

                src={src}

                alt={`씽크대 막힘 실제 작업 사진 ${i + 1}`}

                fill

                className="object-contain p-2"

                sizes="(max-width: 640px) 100vw, 50vw"

              />

            </div>

          ))}

        </div>

      </div>



      <div className="rounded-xl bg-blue-50 px-6 py-5 text-center ring-1 ring-blue-200">

        <p className="text-lg font-bold text-blue-900">주방 막힘은 빠른 대응이 핵심입니다. 바로 상담 가능합니다.</p>

      </div>

    </section>

  );

}


