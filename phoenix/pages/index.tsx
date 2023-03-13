import Renting from 'Renting';
import { ContactUs } from 'ContactUs';
import type { NextPage } from 'next';
import Head from 'next/head';
import Products from 'Products';
import Header from '../src/Header';
import TipoPersona from 'TipoPersona';
import PreHeader from 'PreHeader';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inicio | Phoenix Car</title>
        <meta name="description" content="" />
      </Head>
      <PreHeader />
      <main>
        <Header />
        <Renting />
        <TipoPersona />
        <Products />
        <ContactUs />
      </main>
    </>
  );
};

export default Home;
