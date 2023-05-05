import Image from "next/image";
import Head from "next/head";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import avatar from "../public/me3.png";
import Cards from "@/components/Cards";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Head>
        <title>Dinara Idrissova | Portfolio</title>
        <meta
          name="description"
          content="Dinara Idrissova -a front-end developer, proficient in  JS, CSS, HTML as well as modern front-end frameworks like React.js and NextJS, skilled in building dynamic and responsive user interfaces with a modern design aesthetic. "
        />
      </Head>
      <main className="bg-slate-100 dark:bg-gray-700 px-6 ">
        <section id="hero" className="min-h-screen  max-w-3xl m-auto">
          {/* navbar */}
          <nav className="py-8 md:mb-8 flex justify-between text-gray-600">
            <h1
              className="text-xl md:text-2xl dark:text-white font-spectral font-bold  uppercase
            "
            >
              Dinara Idrissova
            </h1>

            <ul className="flex items-center gap-3 lg:gap-8">
              <li>
                <BsFillMoonStarsFill
                  onClick={() =>
                    theme == "dark" ? setTheme("light") : setTheme("dark")
                  }
                  className="cursor-pointer text-md dark:text-white"
                />
              </li>

              <li>
                <button className="md:text-md  duration-150 transition-all ease-in-out hover:scale-95 bg-gradient-to-b from-teal-600 to-teal-500  px-2 py-1 md:px-4 md:py-2 shadow-sm  rounded-md ">
                  <a href="#" className="text-white text-sm ">
                    Resume
                  </a>
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col lg:flex-row-reverse  justify-center lg:pt-8">
            <div
              style={{ position: "relative" }}
              className=" overflow-hidden mx-auto  bg-gradient-to-r from-slate-500 to-slate-400 rounded-tl-[1.5rem] rounded-br-[1.5rem]  w-44 h-48 transform -skew-x-3 
              lg:w-56 lg:h-60 shadow-[10px_10px_5px_rgb(204,204,204)]"
            >
              <Image
                alt="Picture of the author"
                src={avatar}
                fill
                sizes="(max-width: 224px)"
                placeholder="blur"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="text-center lg:text-start   p-5  lg:transform lg:translate-y-10">
              <h2 className="text-3xl lg:text-5xl font-extrabold  py-2  text-transparent bg-clip-text bg-gradient-to-t from-teal-600 to-teal-400">
                Hi, I'm Dinara
              </h2>
              <h3 className="text-2xl py-2 text-gray-700 dark:text-white">
                I'm a Web Developer
              </h3>
              <p className="text-md py-3 md:py-5  leading-8 text-gray-700 dark:text-white">
                Let me demonstrate my skills and projects through the showcase.
              </p>
            </div>
          </div>
          <button
            onClick={handleClick}
            className="mx-auto mb-10 lg:my-20 flex justify-center items-center bg-gradient-to-b from-teal-600 to-teal-500 rounded-full w-12 h-12 cursor-pointer hover:scale-105 ease-in-out duration-150 transition-all shadow-md"
          >
            <AiOutlineArrowDown className="text-white text-2xl " />
          </button>
        </section>

        <section id="projects" ref={ref} className="pb-10">
          <Cards />
        </section>
      </main>
    </div>
  );
}
