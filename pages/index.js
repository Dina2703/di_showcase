import Image from "next/image";
import Head from "next/head";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import avatar from "../public/avatar_with_bg2.png";
import Cards from "@/components/Cards";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      <main className="bg-slate-50 dark:bg-gray-700 px-6 relative">
        <section
          id="hero"
          className="min-h-screen  max-w-5xl m-auto md:px-10 lg:px-16 "
        >
          {/* navbar */}
          <nav className="lg:px-8 py-8  lg:mb-8 flex justify-between text-gray-600">
            <h1
              className="text-xl lg:text-2xl dark:text-white font-spectral font-bold  uppercase
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
                <button className="lg:text-md  duration-150 transition-all ease-in-out hover:scale-95 bg-gradient-to-b from-teal-600 to-teal-500  px-2 py-1 lg:px-4 md:py-2 shadow-sm  rounded-md ">
                  <a
                    href="Dinara_Idrissova_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-sm "
                  >
                    Resume
                  </a>
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex items-center justify-between flex-col lg:flex-row-reverse   xl:mt-20">
            <div
              className=" overflow-hidden lg:mr-8 rounded-full relative w-48 h-52
              md:w-52 md:h-52 lg:w-64 lg:h-64  bg-avatar_bg bg-cover border-2 border-gray-400"
            >
              <Image
                alt="Dinara Idrissova"
                src={avatar}
                fill
                sizes="(max-width: 300px) 100vw"
                priority
                style={{ objectFit: "cover" }}
                placeholder="blur"
              />
            </div>

            <div className="text-center lg:text-start   p-8  lg:transform lg:translate-y-10">
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
          <Link
            activeClass="active"
            to="projects"
            spy
            smooth
            offset={0}
            duration={1500}
            className="mx-auto mb-4 lg:my-20 flex justify-center items-center bg-gradient-to-b from-teal-600 to-teal-500 rounded-full w-12 h-12 cursor-pointer hover:scale-105 ease-in-out duration-150 transition-all shadow-md "
          >
            <AiOutlineArrowDown className="text-white text-2xl " />
          </Link>
        </section>

        <section id="projects" className="pb-10" title="projects">
          {backToTop && (
            <div
              className="
            fixed bottom-14 right-10 lg:right-20 xl:right-28 ml-auto   bg-gradient-to-b  from-teal-600 to-teal-500  rounded-full w-8 h-8 cursor-pointer hover:scale-105 ease-in-out duration-150 transition-all shadow-md z-50"
            >
              <button
                onClick={scrollUp}
                className="flex items-center justify-center h-full w-full"
              >
                <AiOutlineArrowUp className="text-white text-lg " />
              </button>
            </div>
          )}

          <Cards />
        </section>
      </main>
    </div>
  );
}
