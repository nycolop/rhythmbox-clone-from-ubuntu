import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Rhythmbox clone from Ubuntu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen flex flex-col bg-custom--r-quaternary gap-[.5px]">
        <header className="bg-custom--r-tertiary w-full h-full basis-1/12"></header>

        <main className="grow flex gap-[.5px]">
          <section className="bg-custom--r-primary basis-1/5 flex flex-col justify-between">
            <section className="grow"></section>

            <section className="bg-custom--r-septuagenarian basis-[7%]"></section>
          </section>

          <section className="bg-custom--r-secondary grow"></section>
        </main>

        <footer className="basis-[7%] bg-custom--r-primary"></footer>
      </main>
    </>
  );
}
