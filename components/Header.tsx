import React, { useEffect, useState } from 'react'
import Logo from './logo'
import { AiFillAlert, AiFillBug, AiOutlineUserSwitch } from "react-icons/ai";
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-[yellow]'}`} >
      <div className='flex items-center space-x-2 md:space-x-10'>
        <Logo />
        <ul className='hidden space-x-4 md:flex'>
          <li className='header-link'>Công Viên Quốc Gia</li>
          <li className='header-link'>Hồ Bơi</li>
          <li className='header-link'>Đảo</li>
          <li className='header-link'>Nông Thôn</li>
          <li className='header-link'>Thật Ấn Tượng</li>
          <li className='header-link'>Bãi Biển </li>
          <li className='header-link'>Nhà Thờ </li>
          <li className='header-link' >Bắc Cực</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 text-sm'>
        <AiFillAlert className='hidden h-6 w-6 sm:inline' />
        <p className='hidden lg:inline'>call</p>
        <AiFillBug className='h-6 w-6' />
        <Link href="/account">
          <AiOutlineUserSwitch className='cursor-pointer rounded' />
        </Link>
      </div>
    </header>
  )
}
export default Header