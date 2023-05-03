import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dinara Idrissova | Portfolio</title>
        <meta
          name="description"
          content="Dinara Idrissova -a front-end developer, proficient in  JS, CSS, HTML as well as modern front-end frameworks like React.js and NextJS, skilled in building dynamic and responsive user interfaces with a modern design aesthetic. "
        />
      </Head>
      <main className="bg-slate-100 px-6 md:px-10">
        <section className="min-h-screen max-w-3xl m-auto">
          <nav className="py-10 mb-12 flex justify-between text-slate-600">
            <h1
              className="text-xl md:text-2xl font-spectral font-bold  uppercase
            "
            >
              Dinara Idrissova
            </h1>

            <ul className="flex items-center ">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-md md:text-xl " />
              </li>
              <li>
                <button className="md:text-md  duration-150 transition-all ease-in-out hover:scale-95 bg-gradient-to-r from-green-500 to-green-600 px-2 py-1 md:px-4 md:py-2 shadow-lg  rounded-md ml-5 ">
                  <a href="#" className="text-white text-sm ">
                    Resume
                  </a>
                </button>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
