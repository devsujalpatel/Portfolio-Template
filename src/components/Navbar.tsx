// import { Link } from "react-router-dom";
import { navlist } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-[80%] h-18 flex justify-between items-center mt-4 bg-zinc-900 rounded-lg">
      <img src="/logo.svg" alt="logo" className="h-10 ml-5" />
      <ul className="flex items-center gap-10 mr-5">
        {navlist.map(({ id, title, url }) => (
          <li className="text-gray-200" key={id}>
            <a className="text-xl" href={url}>{title}</a>
            {/* <Link to={url}>{title}</Link> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
