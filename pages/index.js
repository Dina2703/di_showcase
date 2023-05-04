import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import avatar from "../public/me2.png";
import Cards from "@/components/Cards";

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
        <section id="hero" className="min-h-screen  max-w-3xl m-auto">
          {/* navbar */}
          <nav className="py-8 md:mb-8 flex justify-between text-gray-600">
            <h1
              className="text-xl md:text-2xl font-spectral font-bold  uppercase
            "
            >
              Dinara Idrissova
            </h1>

            <ul className="flex items-center gap-3">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-md " />
              </li>

              <li>
                <button className="md:text-md  duration-150 transition-all ease-in-out hover:scale-95 bg-gradient-to-r from-teal-600 to-green-600 px-2 py-1 md:px-4 md:py-2 shadow-lg  rounded-md ">
                  <a href="#" className="text-white text-sm ">
                    Resume
                  </a>
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col lg:flex-row-reverse items-start justify-center">
            <div
              style={{ position: "relative" }}
              className=" overflow-hidden mx-auto bg-gradient-to-br from-gray-200  to-white rounded-full w-36 h-36 md:w-56 md:h-56 shadow-lg"
            >
              <Image
                alt="Picture of the author"
                src={avatar}
                fill
                style={{ objectFit: "scale-down" }}
              />
            </div>

            <div className="text-center p-10  m-auto">
              <h2 className="text-3xl font-extrabold  py-2  text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-green-600">
                Hi, my name is{" "}
                <span className=" block md:inline">Dinara Idrissova</span>
              </h2>
              <h3 className="text-2xl py-2 text-gray-700">
                I'm a Web Developer
              </h3>
              <p className="text-md py-3 md:py-5  leading-8 text-gray-700">
                Let me demonstrate my skills and projects through the showcase.
              </p>
            </div>
          </div>
          <div className="mx-auto mb-10 lg:my-20 flex justify-center items-center bg-gradient-to-b from-teal-400 to-green-600 rounded-full w-12 h-12 cursor-pointer ">
            <AiOutlineArrowDown className="text-white text-2xl " />
          </div>
        </section>

        <section id="projects">
          <Cards />
        </section>
      </main>
    </div>
  );
}
