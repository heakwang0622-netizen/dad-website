import { ImageResponse } from 'next/og'

export const alt = '신촌종합설비 | 24시 긴급출동 설비전문'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const [font400, font700] = await Promise.all([
    fetch('https://fonts.gstatic.com/s/notosanskr/v39/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLQ.ttf').then((res) =>
      res.arrayBuffer()
    ),
    fetch('https://fonts.gstatic.com/s/notosanskr/v39/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLQ.ttf').then((res) =>
      res.arrayBuffer()
    ),
  ])

  return new ImageResponse(
    (
      <div style={{ width: '1200px', height: '630px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', fontFamily: 'Noto Sans KR, sans-serif' }}>
        <div style={{ width: '1200px', height: '140px', backgroundColor: '#1d4ed8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: '60px', fontWeight: '700', color: '#ffffff' }}>신촌종합설비</div>
          <div style={{ fontSize: '20px', color: '#bfdbfe', marginTop: '6px' }}>SINCHON COMPREHENSIVE FACILITIES</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', padding: '30px', gap: '30px' }}>
          <div style={{ flex: 1, backgroundColor: '#f8faff', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#1d4ed8', padding: '14px 24px', borderRadius: '12px 12px 0 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '28px' }}>서비스 항목</span>
            </div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ color: '#1e3a8a', fontSize: '26px' }}>누수탐지</span>
                <span style={{ color: '#1e3a8a', fontSize: '26px' }}>수도 냉난방</span>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ color: '#1e3a8a', fontSize: '26px' }}>씽크대 하수구</span>
                <span style={{ color: '#1e3a8a', fontSize: '26px' }}>소방 배관</span>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ color: '#1e3a8a', fontSize: '26px' }}>변기 세면대</span>
                <span style={{ color: '#1e3a8a', fontSize: '26px' }}>언수도 녹임</span>
              </div>
              <div style={{ backgroundColor: '#1d4ed8', borderRadius: '8px', padding: '10px', display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '22px' }}>24시간 긴급출동 가능</span>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: '#f8faff', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#1d4ed8', padding: '14px 24px', borderRadius: '12px 12px 0 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '28px' }}>연락처</span>
            </div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: '#3b82f6', fontSize: '22px' }}>대표 이문학</span>
              <span style={{ color: '#1d4ed8', fontWeight: '700', fontSize: '40px' }}>010-7553-2981</span>
              <span style={{ color: '#1e3a8a', fontSize: '20px' }}>서울시 서대문구 창천동 2-26</span>
              <span style={{ color: '#3b82f6', fontSize: '20px' }}>sinchon-sulbi.com</span>
              <div style={{ backgroundColor: '#dbeafe', borderRadius: '6px', padding: '8px 20px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#1d4ed8', fontSize: '20px' }}>수도 배관 누수 전문업체</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '1200px', height: '60px', backgroundColor: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#bfdbfe', fontSize: '20px' }}>신촌종합설비 - 믿을 수 있는 설비 파트너</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Noto Sans KR',
          data: font400,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Noto Sans KR',
          data: font700,
          style: 'normal',
          weight: 600,
        },
        {
          name: 'Noto Sans KR',
          data: font700,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
