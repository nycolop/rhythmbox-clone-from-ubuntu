import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Rhythmbox clone from Ubuntu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>

        </header>

        <main className="bg-red-500 w-screen h-screen">
          <p className="text-red-400">asd</p>
        </main>

        <footer>

        </footer>
      </main>
    </>
  )
}
