import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'

import Header from "../components/Header"
import { Hotel } from '../typing'
import requests from '../utils/requests'
interface Props {
  data: Hotel[]
}



const Home = ({ data }: Props) => {
  console.log(data);

  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900 '>
      <Head >
        <title > Home AirBnB</title>
      </Head>
      <Header />
      <main >
        {/* Banner */}
        <Banner />
        <section >
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
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

  return {
    props: {
      data: data
    }
  }
}