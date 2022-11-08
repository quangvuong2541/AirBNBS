import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'

import Header from "../components/Header"
import Row from '../components/Row'
import { Hotel, HotelRoom } from '../typing'
import requests from '../utils/requests'
interface Props {
  data: Hotel[],
  room: HotelRoom[],
}
const Home = ({ data, room }: Props) => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900 '>
      <Head >
        <title > Home AirBnB</title>
      </Head>
      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        {/* Banner */}
        <Banner data={data.data} />
        <section className='md:space-y-24' >
          <Row title ="khách sạn " room={room.data} />
          <Row title ="khách sạn " room={room.data} />
          <Row title ="khách sạn " room={room.data} />
          <Row title ="khách sạn " room={room.data} />

        </section>
      </main>
      {/* footer */}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [data] = await Promise.all([
    fetch(requests.fetch_hotel_img).then((res) => res.json())
  ])

  const [room] = await Promise.all([
    fetch(requests.fetch_room).then((res) => res.json())
  ])
  return {
    props: {
      data: data,
      room: room
    }
  }
}
