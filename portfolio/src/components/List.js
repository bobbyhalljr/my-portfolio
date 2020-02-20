import React from 'react';

const List = () => {

    return (
        <>
        <div class="list-with-heading">
                <div class="heading">
                    <h2 class="heading__h2--dark">
                        Dev Tools
                    </h2>
                </div>

                <div class="ul">
                    <ul class="list">
                        <li class="paragraph__p--light">Technologies</li>
                        <br />
                        <li class="list__list-item">HTML / CSS / JavaScript(ES6+)</li>
                        <li class="list__list-item">React.js</li>
                        <li class="list__list-item">Node.js</li>
                        <li class="list__list-item">HTTP</li>
                        <li class="list__list-item">Rest API's / GraphQL</li>
                        <li class="list__list-item">SQL / Postgres</li>
                        <br />
                        <li class="paragraph__p--light">Tools</li>
                        <br />
                        <li class="list__list-item">Github / Git</li>
                        <li class="list__list-item">Postman / Insomnia</li>
                        <li class="list__list-item">Command Line / Terminal</li>
                        <li class="list__list-item">Netlify / Zeit / Heroku</li>
                        <li class="list__list-item">VS Code</li>
                    </ul>
                </div>
        </div>

            <div class="paragraph">
                <p class="paragraph__p--light">Like What you see?</p>
                <p class="paragraph__p--dark">Take a look at my CodeSandBox profile.</p>
            </div>

            <div class="btn">
                <a href="https://codesandbox.io/u/bobbyhalljr">
                    <button class="btn__btn-secondary-solid-bg">View My CodeSandBox</button>
                </a>
            </div>
        </>
    )
}

export default List;