import * as React from "react"
import ContactButton from "../Buttons/ContactButton";
import "./Hero.scss";

const Hero: React.FC = () => {
    return(
        <section className="hero-container">
            <p className="welcome-badge">↳ Welcome to my domain.</p>
            <div className="hero-content">
                <p className="hero-subcopy">Hello there, <br/> I am a frontend web developer based in Los Angeles California.</p>
                <ContactButton/>
            </div>
        </section>
    )
}

export default Hero;
