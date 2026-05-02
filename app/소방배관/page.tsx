import Image from "next/image";



export const dynamic = "force-dynamic";



const showcasePhotos = ["/images/pipe3.jpg", "/images/pipe4.jpg"];



export default function FirePipePage() {

  return (

    <section className="space-y-8">

      <div className="rounded-2xl bg-blue-800 px-6 py-14 text-white">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-6xl">🧯</p>

          <h1 className="mt-4 text-4xl font-black sm:text-5xl">소방배관 점검·교체, 법정 기준 완벽 대응</h1>

          <p className="mt-4 text-blue-100">

            노후 배관 점검부터 교체 작업까지 체계적으로 진행합니다.

            <br />

            건물 특성에 맞는 안전 기준 대응을 지원합니다.

          </p>

          <a href="tel:010-7553-2981" className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-base font-bold text-blue-800">

            지금 바로 전화하기 010-7553-2981

          </a>

        </div>

      </div>

      <div className="grid gap-4 md:grid-cols-3">

        {["정기 점검", "배관 보수·교체", "안전 기준 대응"].map((item) => (

          <article key={item} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-blue-100">

            <h2 className="text-lg font-bold text-blue-900">{item}</h2>

            <p className="mt-2 text-sm text-slate-600">현장 조건에 맞는 공정으로 안정성과 효율을 함께 확보합니다.</p>

          </article>

        ))}

      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

        <h2 className="text-2xl font-black">작업 순서</h2>

        <p className="mt-3 text-slate-700">Step 1 현장 조사 → Step 2 점검/보수 계획 수립 → Step 3 시공 및 결과 확인</p>

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

                alt={`소방배관 실제 작업 사진 ${i + 1}`}

                fill

                className="object-contain p-2"

                sizes="(max-width: 640px) 100vw, 50vw"

              />

            </div>

          ))}

        </div>

      </div>



      <div className="rounded-xl bg-blue-50 px-6 py-5 text-center ring-1 ring-blue-200">

        <p className="text-lg font-bold text-blue-900">소방배관은 안전과 직결됩니다. 전문 팀에게 맡기세요.</p>

      </div>

    </section>

  );

}


