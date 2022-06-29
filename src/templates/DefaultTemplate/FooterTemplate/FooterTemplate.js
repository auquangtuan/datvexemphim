import React from 'react'
import './FooterTemplate.css'
import mobile from '~/assets/img/mobile.png'
export default function FooterTemplate() {
  return (

    <footer className='footer_container'>
      <div className="footer_content">
            <h2>Ứng Dụng Tiện Lợi Dành Cho Người Yêu Điện Ảnh</h2>
            <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
            <button>App Miễn Phí - TẢI VỀ NGAY</button>
            <p>Tix có 2 phiên bản <span className='iosandroid'>IOS</span> {' & '}<span className='iosandroid'>Android</span></p>
      </div>
      <div className="footer_img">
          <img src={mobile} alt="mobile_footer" />
      </div>
    </footer>
  )
}
