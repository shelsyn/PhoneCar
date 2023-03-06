import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inicio | Phoenix Car</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Header />       
      </main>
    </>
  )
}

export default Home
