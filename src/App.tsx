import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from "./components/theme-provider";
import CanvasCursor from "./components/Cursor";


const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="w-[50%] m-auto">
        <CanvasCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default App;
