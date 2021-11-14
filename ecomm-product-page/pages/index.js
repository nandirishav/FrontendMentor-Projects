import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ecomm Product Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar */}
      <Header />

      <div className="sm:flex sm:flex-col lg:flex lg:flex-row justify-between lg:px-24 lg:py-8 lg:mx-auto">
        <Banner />
        <Main />
      </div>
    </div>
  );
}
