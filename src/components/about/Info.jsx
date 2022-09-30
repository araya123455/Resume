import React from "react"; 
import './about.css';

const Info = () => {
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bx-award about__icon"></i>

                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">8 years Working</span>
            </div>

            <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>

                <h3 className="about__title">Computeed</h3>
                <span className="about__subtitle">2 project</span>
            </div>

            <div className="about__box">
                <i class="bx bx-support about__icon"></i>

                <h3 className="about__title">Subport</h3>
                <span className="about__subtitle">Online</span>
            </div>
        </div>
    )
}

export default Info