import Head from "next/head";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import { fetchRadioStations } from "@/services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [radioStations, setRadioStations] = useState([]);
  const [currentRadio, setCurrentRadio] = useState(0);
  const [loading, setLoading] = useState(true);

  const initialLoad = async () => {
    try {
      const radioStations = await fetchRadioStations();

      for (let i = 0; i < radioStations.length; i++) {
        try {
          const checkRadio = await fetch(radioStations[i].source);

          if (!checkRadio.ok) {
            radioStations[i].available = false;
            console.log(radioStations[i].title, checkRadio);
          } else {
            console.log(radioStations[i].title, checkRadio);
          }
        } catch (err) {
          console.log(radioStations[i].title, err);
          radioStations[i].available = false;
        }
      }

      setRadioStations(radioStations);
    } catch (err) {
      console.error("An error ocurred on initial load of the app: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initialLoad();
  }, []);

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

      {loading ? (
        <div
          id="loading-screen"
          className="absolute w-screen h-screen bg-[rgba(24,24,27,0.95)] top-0 left-0 z-50 flex justify-center items-center"
        >
          <h1 className="text-white text-4xl font-bold">
            Loading app, please wait.
          </h1>
        </div>
      ) : null}

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
            <thead className="text-left text-[#8F8F8F]">
              <tr>
                <th className="text-center border-l border-b border-custom--r-b-primary">
                  M
                </th>
                <th className="pl-2 border-l border-b border-custom--r-b-primary">
                  Title
                </th>
                <th className="pl-2 border-l border-b border-custom--r-b-primary">
                  Genre
                </th>
              </tr>
            </thead>

            <tbody>
              {radioStations.map((rStation) => (
                <tr
                  className={`cursor-pointer ${
                    currentRadio.id === rStation.id && "bg-custom--r-secondary"
                  } ${!rStation.available && "opacity-10"}`}
                  key={rStation.id}
                  onClick={() => setCurrentRadio(rStation)}
                >
                  <td></td>
                  <td className="pl-2">{rStation.title}</td>
                  <td className="pl-2">{rStation.genre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>

        <footer className="basis-[7%] bg-custom--r-b-primary">
          <audio src={currentRadio.source} autoPlay controls></audio>
        </footer>
      </main>
    </>
  );
}
