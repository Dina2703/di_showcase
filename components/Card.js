import React from "react";
import Image from "next/image";

function Card({ project }) {
  return (
    <div>
      <h1>{project.name}</h1>
      <a href={project.url}>
        <Image src={project.img} className="cursor-pointer" />
      </a>
      <p>{project.desc}</p>
      <div>
        <button>live demo</button>
        <button>view code</button>
      </div>
    </div>
  );
}

export default Card;
