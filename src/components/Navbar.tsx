import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { navItems } from "@/constants";
import { useState } from "react";


export function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");

  const handleClick = (name: string) => {
    setActiveItem(name);
  };

  return (
    <nav className="relative w-full m-auto flex justify-between items-center mt-8">
      <ModeToggle />
      <ul className=" px-4 py-3 border-1 dark:border-zinc-800 border-zinc-200 rounded-full dark:bg-zinc-900 bg-gray-100">
        {navItems.map(({ name, link }) => (
          <li key={name} className="inline-block mx-4 text-lg">
            <Link
              to={link}
              onClick={() => handleClick(name)}
              className={`${
                activeItem === name ? "text-teal-500" : "dark:text-zinc-100 text-zinc-700"
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
     
      </ul>
    </nav>
  );
}
