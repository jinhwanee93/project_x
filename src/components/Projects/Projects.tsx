import * as React from "react"
import BorderBrackets from "../Assets/Borders/BorderBrackets";
import "./Projects.scss";

type ProjectsProps = {
    id: string;
}

const Projects: React.FC<ProjectsProps> = ({
    id,
}) => {
    return(
        <section id={id} className="section-container">
            <BorderBrackets/>
            <div className="display-grid--50">
                <div></div>
                <div>
                    <span className="number-badge">02.</span>
                    <h2 className="subheadline">↳ Featured Work <span>(Development)</span></h2>
                </div>
            </div>
            <div>
                <div>
                    <p className="project-text"><span>2020 - 2023 / full-time(remote) / Frontend Developer</span> SimplePractice</p>
                    <ul className="project-list">
                        <li>
                            <a href="https://www.simplepractice.com" target="_blank">__simplepractice.com &nbsp;<span>↗</span></a>
                        </li>
                        <li>
                        <a href="https://www.simplepractice.com/pollen" target="_blank">__simplepractice.com/pollen &nbsp;<span>↗</span></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="project-text"><span>2017 - 2019 / full-time(on-site) / Software Engineer</span> <a href="https://wonderful.io" target="_blank">Wonderful.io</a></p>
                    <ul className="project-list">
                        <li>
                            <a href="https://www.seed.com" target="_blank">__seed.com &nbsp;<span>↗</span></a>
                        </li>
                        <li>
                            <a href="https://www.lexus.com" target="_blank">__lexus.com &nbsp;<span>↗</span></a>
                        </li>
                        <li>
                            <a href="https://www.ladder.sport" target="_blank">__ladder.sport &nbsp;<span>↗</span></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="project-text"><span>2017 - 2017 / part-time(on-site) / Teaching Fellow</span> Hack Reactor</p>
                    <ul className="project-list">
                        <li>__stelth.io (personal team project)</li>
                    </ul>
                </div>
            </div>
            <BorderBrackets type="bottom"/>
        </section>
    )
}

export default Projects;
