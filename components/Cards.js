import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import tutorWebsite from "../public/anara-eng.jpeg";
import domCoffee from "../public/dom-coffee.png";
import print from "../public/print.png";
import travel from "../public/travel.png";
import memoryGame from "../public/memory_game.png";
import bookShelf from "../public/book-shelf.png";
import url_short from "../public/url_shortender.png";
import advice_generator from "../public/advice_generator.jpg";
import ui_design from "../public/ui_design.png";

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
    desc: "This advice generator app built with React and Tailwind CSS, using Advice Slip API (https://api.adviceslip.com).",
    gitUrl: "https://advice-generator-self.vercel.app/",
    id: 2,
  },
  {
    name: "tutor website",
    url: "https://www.englishwithanara.com/",
    img: tutorWebsite,
    desc: "A real business website. Built using React and Tailwind CSS",
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
    desc: "Responsive  Landing Page template built with React and CSS3",
    gitUrl: "https://github.com/Dina2703/travel-site-template",
    id: 5,
  },
  {
    name: "a collection of responsive layouts",
    url: "https://audio-books-next.vercel.app/",
    img: ui_design,
    desc: "UI challenges from Frontend Mentor platform has helpted me to level up my CSS skills",
    gitUrl: "https://github.com/Dina2703/css_small-projects",
    id: 6,
  },
  // {
  //   name: "book-shelf app template",
  //   url: "https://audio-books-next.vercel.app/",
  //   img: bookShelf,
  //   desc: "The template built using Next JS and CSS3",
  //   gitUrl: "https://github.com/Dina2703/next001",
  //   id: 7,
  // },

  // {
  //   name: "printing services website template",
  //   url: "https://print-website.vercel.app/",
  //   img: print,
  //   desc: "The tutor website template built using Next JS and MUI Material",
  //   gitUrl: "https://github.com/Dina2703/print-website/",
  //   id: 9,
  // },
  {
    name: "memory game",
    url: "https://memory-game-dina.netlify.app/",
    img: memoryGame,
    desc: "Memory game built with React",
    gitUrl: "https://github.com/Dina2703/memory-game",
    id: 10,
  },
];

function Cards() {
  return (
    <div className="bg-white dark:bg-gray-600 max-w-4xl m-auto ">
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
          className="p-6  text-center max-w-2xl  m-auto text-lg font-semibold text-gray-600 dark:text-white
        "
        >
          I love creating a fully responsive design that seamlessly adapts to
          both mobile and desktop environments, providing an optimal user
          experience across devices.
        </h3>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-6 lg:p-8 ">
        {projects.map((project) => {
          return <Card project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
