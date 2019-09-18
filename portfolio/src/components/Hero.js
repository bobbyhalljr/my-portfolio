import React from 'react';

const Hero = () => {

    return (
        <section class="hero">
            <div class="container">
                <div class="heading">
                    <h1 class="heading__h1--dark">Full Stack Javascript Engineer</h1>
                    <h2 class="heading__h2--light">"The key to success is to focus our conscious mind on things we desire not things we fear" ~ Brian Tracy</h2>
                </div>

                <div class="video">
                    <video controls src="video/video1.mp4"></video>
                </div>
            </div>
        </section>
    )
}

export default Hero;