import React from "react";
import Image from "next/image";

function Card({ project }) {
  return (
    <div className=" p-3 md:p-6 flex flex-col justify-center items-center shadow-custom  lg:rounded-lg  dark:border dark:border-b-3 dark:border-gray-800 dark:text-white">
      <h1 className="text-center uppercase font-bold py-5 ">{project.name}</h1>
      <a href={project.url}>
        <Image
          src={project.img}
          alt={project.name}
          className="cursor-pointer h-64 w-96 hover:scale-[1.02] ease-in-out duration-300 transition-all"
        />
      </a>
      <p className="p-5  dark:text-slate-200 h-16 w-full line-clamp-2  text-center">
        {project.desc}
      </p>
      <div className="flex gap-5 justify-center py-6">
        <a href={project.url} target="_blank">
          <button
            className="bg-white   text-xs uppercase font-semibold py-2 px-4 border-2 hover:scale-105 transition-all ease-in-out border-teal-300 text-white rounded shadow bg-gradient-to-r
           from-teal-400 to-sky-600"
          >
            live demo
          </button>
        </a>
        <a href={project.gitUrl} target="_blank">
          <button className="bg-white   text-xs uppercase font-semibold py-2 px-4 border-2 hover:scale-105 transition-all ease-in-out border-teal-300 text-white rounded shadow bg-gradient-to-r from-teal-400 to-sky-600">
            view code
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
