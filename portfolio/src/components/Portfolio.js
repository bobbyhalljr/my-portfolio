import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import App from '../App';

import budget from '../images/budget-app.jpg';
import crypto from '../images/crypto.jpeg';
import swaap from '../images/swaap.jpg';
import SinglePortfolio from '../components/SinglePortfolio';

const Portfolio = (props) => {

    return (
        <>
        <section class="portfolio">
            <div class="container">

                <div class="title">
                    <h2 class="title__sub-title--light">My recent work</h2>
                    <h1 class="title__main-title">Portfolio</h1>
                    <hr align="left" size="9" color="#6EBDFF" class="title__hr-primary" />
                </div>

                <div class="paragraph">
                    <p class="paragraph__p--dark">
                        If you have any questions please feel free to
                        <a href={`mailto: bobbyhalljrcs@gmail.com`}> Email Me.</a>
                    </p>
                </div>

                <div class="project">
                    <div class="project__bg">
                        <img src={swaap} className='project__bg--video' />
                    </div>
                    <div class="project__title">
                        <div class="project__title--sub-title">
                            Store contacts, write notes, remember where you met someone.
                        </div>
                        <div class="project__title--main-title">
                            Swaap (professional Contacts)
                        </div>
                    </div>
                    <div class="project__btn">
                        <a href='https://swaap.co'>
                            {/* <h3 className='project__btn--solid-sm'>view</h3> */}
                            <button className="project__btn--solid-sm">View Project</button>
                        </a>
                    </div>
                </div>

                <div class="project">
                    <div class="project__bg">
                        <img src={budget} className='project__bg--video' />
                    </div>
                    <div class="project__title">
                        <div class="project__title--sub-title">
                            Keeps track of expenses (CRUD app)
                        </div>
                        <div class="project__title--main-title">
                            Budget-App
                        </div>
                    </div>
                    <div class="project__btn">
                        <a href="https://budget-app.bobbyhalljr.now.sh/">
                            <button class="project__btn--solid-sm">View Project</button>
                        </a>
                    </div>
                </div>

                <div class="project">
                    <div class="project__bg">
                        <img src={crypto} className='project__bg--video' />
                    </div>
                    <div class="project__title">
                        <div class="project__title--sub-title">
                            Crypto Currency Tracker (API)
                        </div>
                        <div class="project__title--main-title">
                            Crypto Tracker
                        </div>
                    </div>
                    <div class="project__btn">
                        <a href="https://crytpo-tracker.now.sh/">
                            <button class="project__btn--solid-sm">View Project</button>
                        </a>
                    </div>
                </div>
                <div class="paragraph">
                    <p class="paragraph__p--light">Want to see more? </p>
                        <p class="paragraph__p--dark">Take a look at my GitHub profile.</p>
                </div>

                <div class="btn">
                    <a href="https://github.com/bobbyhalljr">
                        <button class="btn__btn-secondary-solid-bg">View My GitHub</button>
                    </a>
                </div>

            </div>
        </section>
        </>
    )
}

export default Portfolio;