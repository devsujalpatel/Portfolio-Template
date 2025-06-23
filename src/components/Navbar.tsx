import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { navItems } from "@/constants";

export function Navbar() {
  return (
    <div className="w-full m-auto flex justify-between items-center mt-8">
      <ModeToggle />
      <ul className="px-4 py-3 border-1 rounded-full dark:bg-zinc-900 bg-zinc-100">
        {navItems.map(({ name, link }) => (
          <li key={name} className="inline-block mx-4 text-lg">
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
