import Head from "next/head";
import Homecomp from "../src/components/Homecomp";
import Layout from "../src/layouts/Layout";

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
      </Layout>
    </div>
  );
}
