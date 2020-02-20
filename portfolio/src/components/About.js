import React from 'react';

import Model2 from './Model2';

import bobbyPhoto from '../images/headshot.jpg';

const About = () => {

    return (
        <div class="about-me">
            <div class="container">

                <div class="title">
                    <h2 class="title__sub-title--light">Get to know a little</h2>
                    <h1 class="title__main-title">About Me</h1>
                    <hr align="left" size="9" color="#6EBDFF" class="title__hr-primary" />
                </div>

                <div class="info-card">
                    <div class="img">
                        <img class="img__img--round" src={bobbyPhoto} alt="picture of bobby leon hall jr" />
                    </div>
                    <div class="info-card__p-dark">
                        <p>
                            My mindset is on meaningful work and meaningful relationships.
                            I have 3 years experience with HTML, CSS, and vanilla Javascript (ES6+). I also have experience with React.js, Node,js, GraphQL and PostgresQL.
                            <br />
                            <br />
                            I'm very passionate about Front-End development but I am very well versed with Backend Development with Node.js and a little Python.
                            <br />
                            <br />
                            I have work extensively with:
                            <br />
                            Remote teams
                            <br />
                            UX designers
                            <br />
                            Project managers
                            <br />
                            Team leads
                            <br />
                            Front-end developers
                            <br />
                            Backend developers
                        </p>
                    </div>

                    <div class="social-links">
                        <a href='https://www.linkedin.com/in/bobby-hall-jr-339091143/'><i class=" social-links__linkedin fab fa-linkedin-in fa-gradient"></i></a>
                        <a href='https://github.com/bobbyhalljr'><i class=" social-links__github fab fa-github-alt fa-gradient"></i></a>
                    </div>

                    <div class="btn">
                        <a href="#">
                            <Model2 />
                            {/* <button class="btn__btn-secondary-solid-bg">Hire Me</button> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
