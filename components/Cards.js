import React from "react";
import tutorWebsite from "../public/anara-eng.jpeg";
import domCoffee from "../public/dom-coffee.png";
import print from "../public/print.png";
import travel from "../public/travel.png";
import memoryGame from "../public/memory-game.png";
import bookShelf from "../public/book-shelf.png";

import Card from "./Card";

const projects = [
  {
    name: "tutor website",
    url: "https://www.englishwithanara.com/",
    img: tutorWebsite,
    desc: "The tutor website template built using React and Tailwind CSS",
    id: 1,
  },
  {
    name: "coffee-shop website template",
    url: "https://coffee-shop-dom.netlify.app/",
    img: domCoffee,
    desc: "This coffee shop website template built using HTML5, JS, CSS3, Bootstrap",
    id: 2,
  },
  {
    name: "Travel agency Landing Page template",
    url: "https://travel-react-template.netlify.app/",
    img: travel,
    desc: "The  Landing Page template built using React and CSS3",
    id: 3,
  },
  {
    name: "tutor website",
    url: "https://audio-books-next.vercel.app/",
    img: bookShelf,
    desc: "The template built using Next JS and CSS3",
    id: 4,
  },
  {
    name: "printing services website template",
    url: "https://print-website.vercel.app/",
    img: print,
    desc: "The tutor website template built using Next JS and MUI Material",
    id: 5,
  },
  {
    name: "memory game",
    url: "https://memory-game-dina.netlify.app/",
    img: memoryGame,
    desc: "The tutor website template built using HTML5, CSS3, JS",
    id: 6,
  },
];

function Cards() {
  return (
    <div>
      {projects.map((project) => {
        return <Card project={project} />;
      })}
    </div>
  );
}

export default Cards;
