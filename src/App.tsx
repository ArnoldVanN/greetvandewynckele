import CVSection from "./CVSection";
import PortfolioSection from "./PortfolioSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import HeaderSection from "./HeaderSection";
import AboutSection from "./AboutSection";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")!.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 text-[0.95rem] font-default">
        <HeaderSection />
        <div className=" text-left">
          <AboutSection />
          <CVSection />
        </div>
        <PortfolioSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
