import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubSection = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;
      setIsDark(html.classList.contains("dark"));
    };

    // Initial check
    checkTheme();

    // Optional: observe class changes (e.g., when user toggles theme)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-4 flex items-center flex-col w-full">
      <h2 className="text-2xl font-extrabold dark:text-gray-300 text-gray-700">
        GitHub Calendar
      </h2>
      <a href="https://sujalpatel.tech/github" target="_blank" className="w-full">
        <div className="w-[93%] dark:bg-zinc-900 bg-gray-100 mt-6 flex justify-center items-center p-4 rounded-lg ">
        <GitHubCalendar
          username="devsujalpatel"
          colorScheme={isDark ? "dark" : "light"}
         
        />
      </div>
      </a>
    </div>
  );
};

export default GitHubSection;
