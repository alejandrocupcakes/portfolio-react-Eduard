import React from "react"
import './SkillsCard.css'
const Skills =({title,iconUrl,isActive,onClick}) =>{
    return(
    <div className={`skills-card ${isActive ? "": ""}`} onClick={() => onClick()}>
    <div className="skills-icon">
    <img src={iconUrl} alt={title} />
    </div>
    <span>{title}</span>
    </div>
    )
}
export default SkillsCard