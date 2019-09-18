import React from 'react';

const Portfolio = () => {

    return (
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
                        <a href="#">Email Me.</a>
                    </p>
                </div>

                <div class="project">
                    <div class="project__bg">
                        <video loop muted autoplay poster="video/video1" class="project__bg--video" src="video/video1.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="project__title">
                        <div class="project__title--sub-title">
                            Sub-title of project
                        </div>
                        <div class="project__title--main-title">
                            Title of project
                        </div>
                    </div>
                    <div class="project__btn">
                        <a href="#">
                            <button class="project__btn--solid-sm">View Project</button>
                        </a>
                    </div>
                </div>

                <div class="project">
                    <div class="project__bg">
                        <video loop muted autoplay poster="video/video1" class="project__bg--video" src="video/video1.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="project__title">
                        <div class="project__title--sub-title">
                            Sub-title of project
                        </div>
                        <div class="project__title--main-title">
                            Title of project
                        </div>
                    </div>
                    <div class="project__btn">
                        <a href="#">
                            <button class="project__btn--solid-sm">View Project</button>
                        </a>
                    </div>
                </div>

                <div class="project">
                    <div class="project__bg">
                        <video loop muted autoplay poster="video/video1" class="project__bg--video" src="video/video1.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="project__title">
                        <div class="project__title--sub-title">
                            Sub-title of project
                        </div>
                        <div class="project__title--main-title">
                            Title of project
                        </div>
                    </div>
                    <div class="project__btn">
                        <a href="#">
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
    )
}

export default Portfolio;