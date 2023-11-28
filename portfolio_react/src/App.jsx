import Home from "./components/Home"
import Nav from "./components/Nav"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="bg-[#262A33]">
    <Nav/>
    <Home/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default App
