import { useState } from "react";
import './qualification.css'

const Qualification = () => {
    return (
        <section>
            <h2 className="section__title brget">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className = "qualification__button button--flex" >
                        <i className ="uil uil-graduation-cap qualification__icon">
                        </i>{""}Education
                    </div>

                    {/* <div className= "qualification__button button--flex" >
                        <i className="uil uil-briefcase-alt qualification__icon">
                        </i>Experience
                    </div> */}
                </div>

                <div className="qualification__section">
                    <div className= "qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Mahanakorn University Of Technology</h3>
                                <span className="qualification__subtitle">
                                Information Technology and Digital Innovation
                                <h4 className="qualification__title">Cumulative GPA: 3.48</h4>
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Nongchok pittayanusorn mathayom school</h3>
                                <span className="qualification__subtitle">
                                Mathematics-Science Programe
                                <h4 className="qualification__title">Cumulative GPA: 3.54</h4>
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;