import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoTix from '~/assets/img/LogoTix.png'
import './HeaderTemplate.css'
export default function HeaderTemplate() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <header>
      <NavLink to='/'><img src={LogoTix} alt='LogoTix'></img></NavLink>
      <nav className={`header_menu ${isOpen && 'open'}`}>
        <NavLink to='/'><a>Trang Chủ</a></NavLink>
        <NavLink to='/checkout'><a>Đặt Vé</a></NavLink>
        <NavLink to='/'><a>Tin Tức</a></NavLink>
        <NavLink to='/'><a>Ứng Dụng</a></NavLink>
      </nav>
        <NavLink to='/login'><button className='header_button'>Đăng Nhập</button></NavLink>
      <div className={`header_right ${isOpen && 'open'}`} onClick={()=>setIsOpen(!isOpen)}>
        <div className='header_toggle'></div>
      </div>
    </header>
  )
}
