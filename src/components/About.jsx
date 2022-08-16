import React from "react";
import logo from '../assets/Dojeto.jpg'
import linkshortener from '../assets/LinkShortener.jpeg'
import codebin from '../assets/CodeBin.jpeg'

const About = ()=>{

    /*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tc => {
        tc.classList.remove('filters__active')
    })
    target.classList.add('filters__active')

    tabs.forEach(t => {
        t.classList.remove('filter-tab-active')
    })
    tab.classList.add('filter-tab-active')
})
})

    return(
        <div section="aboutme" className="aboutme">
            <h1>About me </h1>
            <div className="image">
                <img src={logo} alt="" />
                <h5>Om Limdiwala (Dojeto)</h5>
                <h6>Full Stack Web Developer || Game Developer</h6>
                <p>
                I'm a Information Technology Student at A.D Patel Institute of Technology. I am currently studying and honing my skills in Web Development and Competitive Programming. I know Node js,Python, C++, HTML, CSS, and JS etc
                <br/>
                I'm also a Game Developer who make random games using unreal engine and I'd like to learn more about Game Development
                </p>
            </div>

        <main class="main">
        <section class="filters container">
            <ul class="filters__content">
                <button class="filters__button filter-tab-active" data-target="#projects">
                    Projects
                </button>
                <button class="filters__button" data-target="#skills">
                    Skills / Tools
                </button>
            </ul>

            <div class="filters__sections">
                <div class="projects__content grid filters__active" data-content id="projects">

                    <article class="projects__card">
                        <img src={linkshortener} alt="" class="projects__img"/>
                        <div class="projects__modal">
                            <div>
                                <a href="https://linkshortener.cf/"
                                    class="projects__button button button__small">
                                    <i class="ri-link"></i>
                                </a>
                                <span class="projects__subtitle">Web</span>
                                <h3 class="projects__title">Link Shortener</h3>
                                <p class="projects__description">Simple LinkShortener Using Html Css and Js</p>
                            </div>
                        </div>
                    </article>

                    <article class="projects__card">
                        <img src={codebin} alt="" class="projects__img"/>
                        <div class="projects__modal">
                            <div>
                                <a href="https://codebin-production.up.railway.app/"
                                    class="projects__button button button__small">
                                    <i class="ri-link"></i>
                                </a>
                                <span class="projects__subtitle">Web</span>
                                <h3 class="projects__title">DojeBin</h3>
                                <p class="projects__description">Simple PasteBin for Share your code snippets</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="skills__content grid" data-content id="skills">
                    <div class="skills__area">
                        <h3 class="skills__title">Web Development</h3>

                        <div class="skills__box">
                            <div class="skills__group">
                                <div class="skills__data">
                                    <i class="ri-html5-line"></i>

                                    <div>
                                        <h3 class="skills__name">HTML</h3>
                                        <span class="skills__level">Intermediate</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-css3-line"></i>

                                    <div>
                                        <h3 class="skills__name">CSS</h3>
                                        <span class="skills__level">Intermediate</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-braces-line"></i>

                                    <div>
                                        <h3 class="skills__name">JavaScript</h3>
                                        <span class="skills__level">Intermediate</span>
                                    </div>
                                </div>

                                
                                <div class="skills__data">
                                    <i class="ri-braces-line"></i>

                                    <div>
                                        <h3 class="skills__name">NodeJS</h3>
                                        <span class="skills__level">Intermediate</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-database-line"></i>

                                    <div>
                                        <h3 class="skills__name">MongoDB</h3>
                                        <span class="skills__level">Intermediate</span>
                                    </div>
                                </div>

                            </div>

                            <div class="skills__group">

                            <div class="skills__data">
                                    <i class="ri-reactjs-line"></i>

                                    <div>
                                        <h3 class="skills__name">React</h3>
                                        <span class="skills__level">Basic</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-git-pull-request-line"></i>

                                    <div>
                                        <h3 class="skills__name">Git</h3>
                                        <span class="skills__level">Basic</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-github-line"></i>

                                    <div>
                                        <h3 class="skills__name">GitHub</h3>
                                        <span class="skills__level">Intermediate</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
        </div>
    )
}

export default About