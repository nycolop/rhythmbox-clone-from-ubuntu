import Head from "next/head";
import { Inter } from "@next/font/google";
import { useEffect, useState, useRef } from "react";
import { fetchRadioStations } from "@/services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [radioStations, setRadioStations] = useState([]);
  const [currentRadioId, setCurrentRadioId] = useState(0);
  const player = useRef(null);

  useEffect(() => {
    fetchRadioStations()
      .then((res) => setRadioStations(res))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!currentRadioId) return;

    const radioStation = radioStations.find(
      (rStation) => currentRadioId === rStation.id
    );

    player.current.src = radioStation.source;
  }, [currentRadioId, radioStations]);

  return (
    <>
      <Head>
        <title>Rhythmbox clone</title>
        <meta name="description" content="Rhythmbox clone from Ubuntu" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="PWA App" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PWA App" />
        <meta property="og:description" content="Best PWA App in the world" />
        <meta property="og:site_name" content="PWA App" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/icons/apple-touch-icon.png"
        />
      </Head>

      <main
        className={`${inter.className} h-screen w-screen flex flex-col bg-custom--r-b-quaternary gap-[.5px] text-white`}
      >
        <header className="bg-custom--r-b-tertiary w-full h-full basis-1/12"></header>

        <main className="grow flex gap-[.5px]">
          <section className="bg-custom--r-b-primary basis-1/5 flex flex-col justify-between">
            <section className="grow"></section>

            <section className="bg-custom--r-b-septuagenarian basis-[7%]"></section>
          </section>

          <table className="bg-custom--r-b-secondary grow">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
              </tr>
            </thead>

            <tbody>
              {radioStations.map((rStation) => (
                <tr
                  className={`cursor-pointer ${
                    currentRadioId === rStation.id && "bg-custom--r-secondary"
                  }`}
                  key={rStation.id}
                  onClick={() => setCurrentRadioId(rStation.id)}
                >
                  <td>{rStation.title}</td>
                  <td>{rStation.genre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>

        <footer className="basis-[7%] bg-custom--r-b-primary">
          <audio src="" autoPlay ref={player} controls></audio>
        </footer>
      </main>
    </>
  );
}
