import Image from "next/image";
import Pricing from "./components/pricing.jsx";
import Faqs from "./components/faqs.jsx";
import Gallery from "./components/gallery.jsx";

import "./globals.css";

export default function Home() {
  return (
    <>
      <section className="relative bg-[url(https://m.media-amazon.com/images/I/8168oUI+XDL.jpg)] bg-cover bg-center bg-no-repeat transform scale-x(-1)">
        <div className="bg-white/15 2xl:bg-transparent 2xl:from-white/15 2xl:to-white/15 ltr:2xl:bg-gradient-to-r rtl:2xl:bg-gradient-to-l">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center justify-center">
            <div className="mx-auto max-w-xl flex justify-center items-center ">
              <img
                className="rounded-full animate-bounce h-64 w-64"
                src="logo.png"
              ></img>
            </div>
            <div className="rounded-lg border-4 border-green-300 shadow-2xl shadow-green-500/50 p-3 mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-4xl mb-4  text-center px-2 text-white bg-green-600 rounded">
                Complejo Deportivo Pelarco Soccer
                <strong className="font-extrabold text-black sm:block lg:block xl:block">
                  Arriendo de canchas
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed text-white font-bold bg-green-600 rounded">
                +56 9 4211 1000
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className=" block w-full rounded px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring active:bg-red-500 sm:w-auto transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-700 "
                  href="/get-started"
                >
                  ARRIENDA!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <Faqs />
      <Gallery />
    </>
  );
}
