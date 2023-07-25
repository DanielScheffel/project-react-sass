import AboutContainer from "./AboutContainer"
import ProjectsContainer from "./ProjectsContainer"
import TechnogiesContainer from "./TechnogiesContainer"

import "../styles/components/maincontent.sass"


const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnogiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent