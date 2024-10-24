import React from "react"
import "./WorkExperience.css"
import ExperienceCard from "./ExperienceCard/ExperienceCard"
import {WORK_EXPERIENCE} from "../../Utils/data"

const WorkExperience = () =>{
    return(
        <section className="experience-container">
            <h5>WorkExperience</h5>
            <div className="experience-content"></div>
            {WORK_EXPERIENCE.map((item)=>(
                <ExperienceCard key={item.title} details={item}/>
            ))}
        </section>
    )
}
export default WorkExperience