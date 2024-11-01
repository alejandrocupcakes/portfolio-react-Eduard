import React from "react"
import '../src/App.css'
import Welcome from './components/Welcome/Welcome'
import HUseState from './components/HUseState/HUseState'
import  Navbar  from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Skills from "./components/Skills/Skills"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import ContactMe from "./components/ContactMe/ContactMe"
const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Welcome/>
        <Skills/>
        <WorkExperience/>
        <HUseState/>
        <ContactMe/>
      </div>
    </>
  )
}

export default App
