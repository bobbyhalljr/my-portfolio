import React from 'react';

import video from '../video/video1.mp4';

const Hero = () => {

    return (
        <section class="hero">
            <div class="container">
                <div class="heading">
                    <h1 class="heading__h1--dark">Full Stack Web Developer</h1>
                </div>

                {/* <div class="video">
                    <video controls src={video}></video>
                </div> */}
                <h2 class="heading__h2--light">"The key to success is to focus our conscious mind on things we desire not things we fear" ~ Brian Tracy</h2>
            </div>
        </section>
    )
}

export default Hero;