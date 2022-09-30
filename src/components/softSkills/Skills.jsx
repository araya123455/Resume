import React from 'react'
import './softSkills.css'
import SoftSkills from './SoftSkills'

const Skills = () => {
    return(
        <section className="skills section" id="softSkills">
            <h2 className="section__title">Soft Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid"><SoftSkills/></div>

        </section>
    )
}
export default Skills