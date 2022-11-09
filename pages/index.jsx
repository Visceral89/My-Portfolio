import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/index.module.css'
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

      <div className={style.title}>
        <h1>Rasmus Bremholm<span className={style.portfolio}>Portfolio_</span></h1>
        {/* Here goes the navigation thing */}
        <div className={style.usp}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A asperiores cumque, assumenda error soluta nemo nostrum voluptate temporibus exercitationem! Optio harum assumenda, commodi ducimus quod dicta modi tempora nesciunt doloremque!</p>
        </div>
      </div>

      {/* Header
            H1
              Onepage Navigation
            Short Desc
            Title Image */}

      
</>
  )
}
