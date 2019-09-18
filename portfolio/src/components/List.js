import React from 'react';

const List = () => {

    return (
        <>
        <div class="list-with-heading">
                <div class="heading">
                    <h2 class="heading__h2--dark">
                        Dev Tools:
                    </h2>
                </div>

                <div class="ul">
                    <ul class="list">
                        <li class="list__list-item">Github</li>
                        <li class="list__list-item">Chrome</li>
                        <li class="list__list-item">CodePen</li>
                        <li class="list__list-item">Command Line</li>
                        <li class="list__list-item">Netlify</li>
                        <li class="list__list-item">Flexbox & CSS Grid</li>
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