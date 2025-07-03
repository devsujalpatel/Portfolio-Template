import { Button } from "@/components/ui/button";
import { HoverArea, HoverCard } from "./ui/hover-card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Card = ({ title, description, link, image }: CardProps) => {
  return (
    <HoverArea className="w-full sm:w-1/2 md:w-1/3 p-2">
      <HoverCard
        className="rounded-lg flex flex-col items-center h-full"
        color="teal"
      >
        <div className="w-[280px]">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="rounded-xl p-4"
          />
        </div>
        <div className="py-4 px-4 text-left ">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-md text-zinc-500 font-semibold mt-2">
            {description}
          </p>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 dark:bg-zinc-300  dark:hover:bg-zinc-400 dark:text-neutral-950">
              Check it out <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </HoverCard>
    </HoverArea>
  );
};

export default Card;
