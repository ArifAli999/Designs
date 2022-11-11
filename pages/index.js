import Head from 'next/head'
import Image from 'next/image'
import HeroBar from '../components/HeroBar'
import NavBar from '../components/NavBar'
import ProductGrid from '../components/ProductGrid'
import SubBar from '../components/SubBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (


    <div className='flex-col flex items-stretch min-h-screen  space-between justify-center overflow-hidden'>

      {/** Hero Component - Nav Bar & Hero Title */}
      <div className=' h-full flex-1 flex flex-col  '>

        <NavBar />

        <HeroBar />

        <SubBar />

      </div>



      {/** Product Grid */}
      <div className='h-full flex-1'>
        <ProductGrid />
      </div>


    </div>



  )
}
