import React from 'react';

import Model from './Model';
import Model2 from './Model2';

const Contact = () => {

    return (
        <section class="contact">
            <div class="container">

                <div class="title">
                    <h2 class="title__sub-title--light">I love building meaningful relationships</h2>
                    <h1 class="title__main-title">Contact Me</h1>
                    <hr align="left" size="9" color="#6EBDFF" class="title__hr-primary" />
                </div>

                <div class="info-card">
                    <div class="info-card__p-dark">
                        <p>
                            Feel free to contact me if you want to Hire me for a project, collaborate on a project, or just to talk about interesting
                            ideas.
                        </p>
                    </div>
                    <div class="btn">
                        <Model2 />
                        {/* <a href="#">
                            <button class="btn__btn-secondary-solid-bg">Hire Me</button>
                        </a> */}
                    </div>
                    <div class="btn">
                        <Model />
                        {/* <a href="#">
                            <button class="btn__btn-secondary-outline-bg">collaborate on a project</button>
                        </a> */}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact;