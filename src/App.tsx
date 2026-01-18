import CredentialsSection from "./CredentialsSection";
import PortfolioSection from "./PortfolioSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import HeaderSection from "./HeaderSection";
import AboutSection from "./AboutSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 text-[0.95rem] font-default">
        <HeaderSection />
        <div className=" text-left">
          <AboutSection />
          <CredentialsSection />
        </div>
        <PortfolioSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
