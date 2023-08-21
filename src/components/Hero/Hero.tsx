import * as React from "react"
import ContactButton from "../Buttons/ContactButton";
import "./Hero.scss";

const Hero: React.FC = () => {
    return(
        <section className="hero-container">
            <p className="welcome-badge">↳ Welcome to my domain.</p>
            <p className="welcome-subcopy">Software Engineer based in Los Angeles, California.</p>
        </section>
    )
}

export default Hero;
