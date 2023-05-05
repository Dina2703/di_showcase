import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import tutorWebsite from "../public/anara-eng.jpeg";
import domCoffee from "../public/dom-coffee.png";
import print from "../public/print.png";
import travel from "../public/travel.png";
import memoryGame from "../public/memory-game.png";
import bookShelf from "../public/book-shelf.png";
import url_short from "../public/url_shortender.png";
import advice_generator from "../public/advice_generator.jpg";

import Card from "./Card";

const projects = [
  {
    name: "Url Shortender",
    url: "https://url-shortinig-api.vercel.app/ ",
    img: url_short,
    desc: "Landing page, integrated with the URL shortening API (https://app.shrtco.de/). Built with React and Tailwind CSS.",
    gitUrl: "https://github.com/Dina2703/url_shortinig_api.git ",
    id: 1,
  },
  {
    name: "Advice generator app",
    url: "https://url-shortinig-api.vercel.app/ ",
    img: advice_generator,
    desc: "The challenge is to build out an advice generator app using the [Advice Slip API](https://api.adviceslip.com). Built with React and Tailwind CSS.",
    gitUrl: "https://advice-generator-self.vercel.app/",
    id: 2,
  },
  {
    name: "tutor website",
    url: "https://www.englishwithanara.com/",
    img: tutorWebsite,
    desc: "The tutor website template built using React and Tailwind CSS",
    gitUrl: "https://github.com/Dina2703/anara-website",
    id: 3,
  },
  {
    name: "coffee-shop website template",
    url: "https://coffee-shop-dom.netlify.app/",
    img: domCoffee,
    desc: "This coffee shop website template built using HTML5, JS, CSS3, Bootstrap",
    gitUrl: "https://github.com/Dina2703/my-project",
    id: 4,
  },
  {
    name: "Travel agency Landing Page template",
    url: "https://travel-react-template.netlify.app/",
    img: travel,
    desc: "The  Landing Page template built using React and CSS3",
    gitUrl: "https://github.com/Dina2703/travel-site-template",
    id: 5,
  },
  {
    name: "book-shelf app template",
    url: "https://audio-books-next.vercel.app/",
    img: bookShelf,
    desc: "The template built using Next JS and CSS3",
    gitUrl: "https://github.com/Dina2703/next001",
    id: 6,
  },
  {
    name: "printing services website template",
    url: "https://print-website.vercel.app/",
    img: print,
    desc: "The tutor website template built using Next JS and MUI Material",
    gitUrl: "https://github.com/Dina2703/print-website/",
    id: 7,
  },
  {
    name: "memory game",
    url: "https://memory-game-dina.netlify.app/",
    img: memoryGame,
    desc: "The tutor website template built using HTML5, CSS3, JS",
    gitUrl: "https://github.com/Dina2703/memory-game",
    id: 8,
  },
];

function Cards() {
  return (
    <div className="bg-white dark:bg-gray-600 ">
      <div className="h-10 bg-teal-600  flex items-center justify-end gap-5 pr-6 md:pr-12 ">
        <a href="https://github.com/Dina2703" target="_blank">
          <BsGithub className="text-white text-xl" />
        </a>
        <a href="mailto:dina.b.idrissova@gamil.com" target="_blank">
          <FaRegEnvelope className="text-white text-xl" />
        </a>
      </div>
      <div>
        <h3
          className="text-center max-w-2xl py-5 m-auto text-lg font-semibold text-gray-600 dark:text-white
        "
        >
          Utilizing the power of React and CSS created a fully responsive design
          that seamlessly adapts to both mobile and desktop environments,
          providing an optimal user experience across devices.
        </h3>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-4 ">
        {projects.map((project) => {
          return <Card project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
