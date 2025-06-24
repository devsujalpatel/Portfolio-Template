import { Meteors } from "@/components/magicui/meteors";

const Home = () => {
  return (
    <section className="w-full h-[80vh] mt-4 flex justify-between z-999">
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
          other <span className="text-bold text-white">cool things</span>
        </p>
        <p className="ml-10 text-md mt-4 dark:text-gray-400 text-gray-600">
          Self-taught Full Stack Developer with hands-on experience building
          100+ <br></br>
          React projects, 50+ MERN apps, and 20+ AI-integrated solutions.{" "}
          <br></br> Solved 200+ LeetCode problems, showcasing strong
          problem-solving skills. <br></br>
          Skilled in full-stack development, AI integration, and scalable system
          design.
        </p>
      </div>
      <div className="mt-15">
        <Meteors number={10} />
        <div>
          <img
            src="./myProfile.jpg"
            className="w-32 rounded-md mt-10 mr-15"
            alt="profile image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
