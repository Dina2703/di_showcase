import Image from "next/image";
import Head from "next/head";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
// import { FaFacebookMessenger } from "react-icons/fa";
import { BiMessageAltEdit } from "react-icons/bi";

import avatar from "../public/avatar_with_bg.png";
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
      <main className="bg-[#d6e6da] md:pt-5 dark:bg-gray-700 px-6 relative">
        <section
          id="hero"
          className=" min-h-screen flex flex-col   max-w-5xl m-auto  md:px-10 lg:px-16 "
        >
          {/* navbar */}
          <nav className=" py-8  lg:mb-8 flex justify-between items-center text-gray-600">
            <h1
              className="text-xl lg:text-4xl dark:text-white font-spectral font-bold  uppercase
            "
            >
              Dinara Idrissova
            </h1>

            <ul className="flex items-center gap-5 lg:gap-8 ">
              <li>
                <BsFillMoonStarsFill
                  onClick={() =>
                    theme == "dark" ? setTheme("light") : setTheme("dark")
                  }
                  className="cursor-pointer text-md dark:text-white"
                />
              </li>

              <li>
                <button className=" bg-gradient-to-br from-sky-300 to-teal-500  px-5 py-2 shadow-lg rounded-md">
                  <a
                    href="Dinara_Idrissova_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white md:text-xl text-sm  lowercase"
                  >
                    Resume
                  </a>
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex flex-1 flex-col items-center justify-between h-full  py-5 mb-5">
            <div className="flex   items-center justify-center md:my-10 flex-col lg:flex-row-reverse   ">
              <div
                className=" overflow-hidden lg:mr-8 rounded-full relative w-48 h-48
              md:w-52 md:h-52 lg:w-72 lg:h-64  bg-avatar_bg border-2 border-sky-300 shadow-xl "
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

              <div className="text-center lg:text-start  p-8   ">
                <h2 className="text-3xl lg:text-5xl font-extrabold  py-2  text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-sky-500">
                  Hi, I'm Dinara
                </h2>
                <h3 className="text-3xl py-2 text-gray-700 dark:text-white">
                  I'm a Web Developer
                </h3>
                <p className="text-2xl py-3 md:py-5  leading-8 text-gray-600 dark:text-white">
                  Let me demonstrate my skills and projects through the
                  showcase.
                </p>
              </div>
            </div>
            <div>
              <Link
                activeClass="active"
                to="projects"
                spy
                smooth
                offset={0}
                duration={1500}
                className="mx-auto mb-12  flex justify-center items-center bg-gradient-to-r from-teal-300 to-sky-500 rounded-full w-14 h-14 cursor-pointer hover:scale-110   ease-in-out duration-150 transition-all shadow-md "
              >
                <AiOutlineArrowDown className="text-white text-3xl " />
              </Link>
            </div>
          </div>
        </section>

        <section id="projects" className="pb-10" title="projects">
          <Cards />
        </section>

        <div className="">
          {backToTop && (
            <div
              className="
              fixed bottom-[60px] md:bottom-28 2xl:bottom-80 2xl:right-64 right-10 text-3xl 2xl:text-4xl cursor-pointer  hover:scale-110 ease-in-out duration-150 transition-all shadow-md mb-7 md:mb-0 bg-gradient-to-r
           from-teal-400 to-sky-600 p-2 w-12 h-12 rounded-md "
            >
              <button
                onClick={scrollUp}
                className="flex items-center justify-center h-full w-full"
              >
                <AiOutlineArrowUp className="text-white text-2xl " />
              </button>
            </div>
          )}
        </div>
        <div
          className="fixed bottom-[30px] md:bottom-14 2xl:bottom-40 2xl:right-64 right-10 text-3xl 2xl:text-4xl cursor-pointer  hover:scale-110 ease-in-out duration-150 transition-all shadow-md  bg-gradient-to-r
           from-teal-400 to-sky-600 p-2  rounded-md 
        "
        >
          <a href="mailto:dina.b.idrissova@gmail.com" target="_blank">
            <BiMessageAltEdit className="text-white text-[32px]" />
          </a>
        </div>
      </main>
    </div>
  );
}
