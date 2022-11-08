import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { HotelRoom } from '../typing'

interface Props {
  rooms: HotelRoom[]
}

const TopRoom = ({ rooms }: Props) => {

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 " >
      {rooms?.map((item, key) => {
        return (
          <div key={key}>
            <img src={item.images} className="rounded-sm object-cover md:rounded" />
          </div>
        )
      })}
    </div>
  )
}

export default TopRoom