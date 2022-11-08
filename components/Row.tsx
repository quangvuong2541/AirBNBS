import React, { useRef, useState } from 'react'
import { HotelRoom } from '../typing'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import TopRoom from './TopRoom'
interface Props {
    room: HotelRoom[]
    title: string
}

const Row = ({ room, title }: Props) => {
    const rowRef = useRef<HTMLDivElement>(null)
    const [isHotel, setHotel] = useState(false)
    const handleClick = (direction: string) => {
        setHotel(true)
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current

            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }

    }
    return (
        <div className='h-40 space-y-0.5 md:space-y-2'>
            <h2 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl'>{title}</h2>
            <div className='group relative md:-ml-2' >
                <ChevronLeftIcon className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isHotel && 'hidden'}`} onClick={() => handleClick("left")} />
                <div ref={rowRef} className='flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2'>
                    {room.map((item, key) => {
                        return (
                            <TopRoom key={key} rooms={item.images} />
                        )
                    })}


                </div>
                <ChevronRightIcon className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`} onClick={() => handleClick("right")} />
            </div>

        </div>
    )
}
export default Row