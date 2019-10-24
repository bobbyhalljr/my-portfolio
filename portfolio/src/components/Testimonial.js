import React from 'react';

const Testimonial = () => {

    return (
        <section class="testimonial">
            <div class="container">

                <div class="title">
                    <h2 class="title__sub-title--light">What people say about me.</h2>
                    <h1 class="title__main-title">Testimonials</h1>
                    <hr align="left" size="9" color="#6EBDFF" class="title__hr-primary" />
                </div>

                <div class="test">
                    <div class="img">
                        <img class="test__img--round" src={require("../images/headshot.jpg")} alt="picture of bobby leon hall jr" />
                    </div>
                    <div class="test__body">
                        <div class="paragraph">
                            <p class="test__p--light">CEO / Founder</p>
                            <p class="test__p--dark">Dadvissor Inc.</p>
                        </div>
                        <div class="blockquote-container">
                            <blockquote class="test__blockquote">
                                "Bobby is the man! he did everything spectacularly and fast. He is a real pleasure to be around and gets alog with everyone
                                so well He is a real pleasure to be around and gets alog with everyone so well."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;