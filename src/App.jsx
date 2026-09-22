import { AppProvider } from "./context/AppContext";
import BgEffects from "./components/BgEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <AppProvider>
      <BgEffects />
      <div className="relative z-10 min-h-screen bg-bg/60 text-txt">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </div>
    </AppProvider>
  );
}

export default App;
