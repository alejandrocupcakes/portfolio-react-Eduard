import React from "react"
import "./WorkExperience.css"
import ExperienceCard from "./ExperienceCard/ExperienceCard"
import { WORK_EXPERIENCE } from "../../Utils/data"
import HTML from '../../assets/img/HTMl.png'
import javascript from '../../assets/img/java.png'
import react from '../../assets/img/React-Symbol.png'

const WorkExperience = () => {
    return (
        <section className="experience-container">
            <h5>Work Experience</h5>
            <div className="experience-content">
                {WORK_EXPERIENCE.map((item) => (
                    <div key={item.title} className="experience-item">
                        <ExperienceCard details={item} />
                       { /*<div className="work-img">
                            <div className="tech-icon">
                                <img src={HTML} alt="HTML icon" />
                            </div>
                            <div className="tech-icon">
                                <img src={javascript} alt="JavaScript icon" />
                            </div>
                            <div className="tech-icon">
                                <img src={react} alt="React icon" />
                            </div>
                        </div>*/}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WorkExperience