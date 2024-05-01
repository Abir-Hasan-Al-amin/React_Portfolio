import Home from "./components/Home";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <div className="bg-[#0E1011]">
      <Nav />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
