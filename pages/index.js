import Head from 'next/head'
import Header from '../patterns/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      
      <Header />

      <main>
        {/* SIDEBAR */}
        {/* FEED */}
        {/* WIDGETS */}
      </main>
    </div>
  )
}
