import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (

    // Header
    <>
      <Head>
        <title>Rasmus Bremholm Portfolio</title>
        <meta name="description" content="Rasmus Bremholm a 3D Artist and Teacher" />
        <link rel="icon" href="/favicon.ico" />
        <style>
        @import
         url(&apos;https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;500&display=swap&apos;);
        </style>
      </Head>

      <Navbar />
      {/* Head = Done */}
      {/* Navbar */}
      {/* Header
            H1
              Onepage Navigation
            Short Desc
            Title Image */}

      
</>
  )
}
