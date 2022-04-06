import type { NextPage } from "next";
import Head from "next/head";
import { CarouselGlasses } from "../components/carrossel";
import { Header } from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Venzzo</title>
        <meta name="description" content="-" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <CarouselGlasses />
    </div>
  );
};

export default Home;
