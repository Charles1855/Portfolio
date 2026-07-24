import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import SkillsProjects from './components/SkillsProjects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import topoBg from './assets/topo-bg.png'
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div
        className="bg-platinum/40 bg-scroll md:bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${topoBg})` }}
      >
        <About />
        <SkillsProjects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
export default App