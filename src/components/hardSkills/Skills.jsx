import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backtend from './Backend'

const Skills = () => {
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Hard Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <Frontend/>

                <Backtend/>
            </div>

        </section>
    )
}
export default Skills