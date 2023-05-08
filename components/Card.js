import React from "react";
import Image from "next/image";

function Card({ project }) {
  return (
    <div className=" p-6 flex flex-col justify-center items-center shadow-custom  lg:rounded-lg dark:bg-gray-600  dark:border dark:border-b-2 dark:border-gray-700 dark:text-white">
      <h1 className="text-center uppercase font-bold py-5 ">{project.name}</h1>
      <a href={project.url}>
        <Image
          src={project.img}
          alt={project.name}
          className="cursor-pointer h-64 w-96 hover:scale-[1.02] ease-in-out duration-300 transition-all"
        />
      </a>
      <p className="py-3 dark:text-slate-200 ">{project.desc}</p>
      <div className="flex gap-5 justify-center py-4">
        <a href={project.url} target="_blank">
          <button className="border-gray-600 border-2 px-5 py-2 uppercase text-xs cursor-pointer hover:border-teal-500 hover:text-teal-600 duration-150 transition-all ease-in-out">
            live demo
          </button>
        </a>
        <a href={project.gitUrl} target="_blank">
          <button className="border-gray-600 border-2 px-5 py-2 uppercase text-xs cursor-pointer hover:border-teal-500 hover:text-teal-600 duration-150 transition-all ease-in-out">
            view code
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
