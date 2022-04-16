import Head from "next/head";
import Layout from "../src/layouts/Layout";
import Homecomp from "../src/components/Homecomp";
import Exp from "../src/components/Exp";
import Premios from "../src/components/Premios";
import About from "../src/components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maido - Clone</title>
        <meta name="description" content="Restaurante Maido Clon Cancines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Homecomp />
        <Exp />
        <Premios />
        <About />
      </Layout>
    </div>
  );
}
