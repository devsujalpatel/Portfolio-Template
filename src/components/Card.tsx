import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}
const Card = ({ title, description, link, image }: CardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="w-[30%] h-full flex flex-col justify-center items-center p-2"
    >
      <Image src={image} width={300} height={300} alt={title} className="rounded-lg" />
      <div className="mt-4 hover:ml-2 transition-all duration-200">
        <h2 className="text-left text-xl font-bold">{title}</h2>
      <p className="text-left text-sm mt-4 font-semibold text-zinc-500">{description}</p>
      </div>
      <button className="bg-gray-200 mt-4 mb-5 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer rounded-md px-2 py-1 flex">Check it out <ArrowUpRight size={20} /></button>
    </a>
  );
};

export default Card;
