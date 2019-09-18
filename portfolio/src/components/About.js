import React from 'react';

import Model2 from './Model2';

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
                        <img class="img__img--round" src="images/headshot.jpg" alt="picture of bobby leon hall jr" />
                    </div>
                    <div class="info-card__p-dark">
                        <p>
                            I'm currently making a career switch from a factory commercial baker to software engineer. I respecfully resigned from being a baker (Forever). My mindset now is on meaningful work that helps people through financial education and financial technology.
                        </p>
                    </div>

                    <div class="social-links">
                        <i class=" social-links__linkedin fab fa-linkedin-in fa-gradient"></i>
                        <i class=" social-links__github fab fa-github-alt fa-gradient"></i>
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