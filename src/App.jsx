import { useEffect } from "react"
import AboutSection from "./components/AboutSection/AboutSection"
import ContactSection from "./components/ContactSection/ContactSection"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import ProjectSection from "./components/ProjectsSection/ProjectSection"
import { SkillsSection } from "./components/SkillsSection/SkillsSection"
import AOS from 'aos'


function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main> 
    </>
  )
}

export default App
