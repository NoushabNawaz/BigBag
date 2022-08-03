import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noushab Store</title>
        <meta name="description" content="Noushab Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        
      </main>
      <div><Navbar /></div>
      
     
      
      

    </div>
  );
}
