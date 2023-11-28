import { useParams } from "react-router-dom"
import { ProjectsData } from "../../pages/projects/projectsData"
import Navigation from "../navbar/myNavbar"

function ProjectInfo() {
    const projectId = parseInt(useParams().projectId)
    const projectInformation = ProjectsData.find(project => project.id === projectId )
    console.log(projectInformation)
    
  return (
    <div>
      <Navigation/>
      <h1>{projectInformation.title}</h1>
    </div>
  )
}

export default ProjectInfo
