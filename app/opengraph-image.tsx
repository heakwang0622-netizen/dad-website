import { ImageResponse } from 'next/og'

export const alt = 'Sinchon Sulbi | 24/7 Emergency Plumbing'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '1200px', height: '630px', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ width: '1200px', height: '140px', backgroundColor: '#1d4ed8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: '54px', fontWeight: '700', color: '#ffffff' }}>Sinchon Sulbi</div>
          <div style={{ fontSize: '18px', color: '#bfdbfe', marginTop: '6px' }}>SINCHON COMPREHENSIVE FACILITIES</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', padding: '30px', gap: '30px' }}>
          <div style={{ flex: 1, backgroundColor: '#f8faff', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#1d4ed8', padding: '14px 24px', borderRadius: '12px 12px 0 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '18px' }}>Services</span>
            </div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ color: '#1e3a8a', fontSize: '17px' }}>- Leak Detection</span>
                <span style={{ color: '#1e3a8a', fontSize: '17px' }}>- Water Heating</span>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ color: '#1e3a8a', fontSize: '17px' }}>- Sink & Drain</span>
                <span style={{ color: '#1e3a8a', fontSize: '17px' }}>- Fire Pipe</span>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ color: '#1e3a8a', fontSize: '17px' }}>- Toilet & Basin</span>
                <span style={{ color: '#1e3a8a', fontSize: '17px' }}>- Pipe Thawing</span>
              </div>
              <div style={{ backgroundColor: '#1d4ed8', borderRadius: '8px', padding: '10px', display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '15px' }}>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: '#f8faff', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#1d4ed8', padding: '14px 24px', borderRadius: '12px 12px 0 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '18px' }}>Contact</span>
            </div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: '#3b82f6', fontSize: '15px' }}>CEO: Lee Moon-hak</span>
              <span style={{ color: '#1d4ed8', fontWeight: '700', fontSize: '34px' }}>010-7553-2981</span>
              <span style={{ color: '#1e3a8a', fontSize: '14px' }}>Seoul Seodaemun-gu</span>
              <span style={{ color: '#3b82f6', fontSize: '14px' }}>sinchon-sulbi.com</span>
              <div style={{ backgroundColor: '#dbeafe', borderRadius: '6px', padding: '8px 20px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#1d4ed8', fontSize: '13px' }}>Plumbing Specialist</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '1200px', height: '60px', backgroundColor: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#bfdbfe', fontSize: '15px' }}>Sinchon Sulbi - Your Trusted Plumbing Partner</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
