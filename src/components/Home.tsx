import { Meteors } from "@/components/magicui/meteors";
import GitHubSection from "./GithubSection";
import MagicalShareMenu from "./MagicShareMenu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiPeerlist, SiLeetcode } from "react-icons/si";


const techStack = [
  { name: "Go", icon: "go", color: "#00ADD8" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "nextdotjs", color: "#000000" },
  { name: "Express", icon: "express", color: "#000000" },
  { name: "PostgreSQL", icon: "postgresql", color: "#61d8E4" },
  { name: "Redux", icon: "redux", color: "#6138E4" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "Jest", icon: "jest", color: "#C21325" },
  { name: "Linux", icon: "linux", color: "#FCC624" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "Redis", icon: "redis", color: "#DC382D" },
  { name: "Git", icon: "git", color: "#eb4323" },
];

const Home = () => {
  return (
    <section className="w-full h-[80vh] flex z-999 flex-col">
      <div className="w-full flex justify-between">
        <div className="mt-15">
          <h1 className="text-5xl font-extrabold  mt-15 ml-10 ">Sujal Patel</h1>
          <p className="ml-10 text-lg mt-4 dark:text-gray-400 text-gray-600">
            Building{" "}
            <span className="text-bold text-gray-200 bg-gray-800 p-2">
              Your-Api{" "}
            </span>
            ,{" "}
            <span className="text-bold text-gray-200 bg-gray-800 p-2">
              LeetNinja
            </span>{" "}
            and other <span className="text-bold text-white">cool things</span>
          </p>
          <p className="ml-10 text-md mt-4 dark:text-gray-400 text-gray-600">
            Self-taught Full Stack Developer with hands-on experience building
            100+ <br />
            React projects, 50+ MERN apps, and 20+ AI-integrated solutions.{" "}
            <br />
            Solved 200+ LeetCode problems, showcasing strong problem-solving
            skills. <br />
            Skilled in full-stack development, AI integration, and scalable
            system design.
          </p>
        </div>
        <div className="mt-15">
          <Meteors number={10} />
          <div className="relative">
            <img
              src="./myProfile.jpg"
              className="w-32 rounded-md mt-10 mr-15"
              alt="profile image"
            />
                <div className="absolute top-10 -right-5">
           <MagicalShareMenu

              socialLinks={[
                { icon: <FaGithub />, color: "#000000", url: "https://sujalpatel.tech/github" },
                { icon: <FaXTwitter />, color: "#000000", url: "https://sujalpatel.tech/x" },
                { icon: <FaLinkedin />, color: "#1877f2", url: "https://sujalpatel.tech/linkedin" },
                { icon: <SiPeerlist />, color: "#77dd32", url: "https://peerlist.io/sujalpatel" },
                { icon: <SiLeetcode />, color: "#ff4500", url: "https://leetcode.com/u/sujalpatelcoder/" },
              ]}
            />
        </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="w-full mt-16 flex items-center flex-col">
        <div className="flex items-center mb-4">
          <img
            src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif"
            className="w-8 mr-2"
            alt="tech icon"
          />
          <h1 className="text-3xl font-extrabold dark:text-gray-300 text-gray-700">
            Tech Stack
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mt-2">
          {techStack.map(({ name, icon, color }) => (
            <div
              key={name}
              className="group flex items-center cursor-pointer gap-2 px-4 py-2 rounded-xl bg-zinc-700 text-white dark:bg-zinc-800 shadow-md transition-transform hover:scale-105"
            >
              <img
                src={`https://cdn.simpleicons.org/${icon}/ffffff`}
                alt={name}
                className="w-5 h-5 transition duration-300 group-hover:hidden"
              />
              <img
                src={`https://cdn.simpleicons.org/${icon}/${color.replace(
                  "#",
                  ""
                )}`}
                alt={`${name} colored`}
                className="w-5 h-5 transition duration-300 hidden group-hover:block"
              />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center flex-col">
        <GitHubSection />
      </div>
    
    </section>
  );
};

export default Home;
