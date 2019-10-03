import React from 'react';

import daisyPhoto from '../images/daisy.jpg';

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
                        <img class="test__img--round" src={daisyPhoto} alt="picture of Daisy Mesa" />
                    </div>
                    <div class="test__body">
                        <div class="paragraph">
                            <p class="test__p--light">Team Lead</p>
                            <p class="test__p--dark">Lambda School</p>
                        </div>
                        <div class="blockquote-container">
                            <blockquote class="test__blockquote">
                                "Bobby is a pleasure to work with!  He's very resourceful, committed, and a great team player.  
                                He's also super friendly and easy to get along with - our team has been lucky to get to work with him!"
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;