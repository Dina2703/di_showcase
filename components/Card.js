import React from "react";
import Image from "next/image";

function Card({ project }) {
  return (
    <div className=" p-6 flex flex-col justify-center items-center ">
      <h1 className="text-center uppercase font-bold py-5 ">{project.name}</h1>
      <a href={project.url}>
        <Image src={project.img} className="cursor-pointer h-60 w-96" />
      </a>
      <p className="py-3">{project.desc}</p>
      <div className="flex gap-5 justify-center py-4">
        <a href={project.url} target="_blank">
          <button className="border-gray-600 border-2 px-5 py-2 uppercase text-xs cursor-pointer hover:border-green-500 hover:text-green-600 duration-150 transition-all ease-in-out">
            live demo
          </button>
        </a>
        <a href={project.gitUrl} target="_blank">
          <button className="border-gray-600 border-2 px-5 py-2 uppercase text-xs cursor-pointer hover:border-green-500 hover:text-green-600 duration-150 transition-all ease-in-out">
            view code
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
