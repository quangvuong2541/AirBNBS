import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Hotel } from '../typing'

interface Props {
  data: Hotel[]
}

const Banner = ({ data }: Props) => {

  const [hotel, setHotel] = useState<Hotel | null>(null)

  useEffect(() => {
    setHotel(data[Math.floor(Math.random() * data.length)])
  }, [data])

  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 -z-10' >
        <img className='w-screen bg-cover h-[100vh]' src={`${hotel?.images}`} />
      </div>
      <h1 className='text-2xl lg:text-7xl md:text-4xl font-bold' >{hotel?.name}</h1>
      <div >
        <button className='banner-button'>Info</button>
        <button className='banner-button'>Đến với chúng tôi </button>
      </div>
    </div>
  )
}
export default Banner