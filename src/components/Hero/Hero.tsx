import * as React from "react"
import ContactButton from "../Buttons/ContactButton";
import "./Hero.scss";

const Hero: React.FC = () => {
    return(
        <section className="container">
            <p className="hero-subcopy">Hello there &#128075;, <br/> I am a frontend web developer based in Los Angeles California.</p>
            <ContactButton/>
        </section>
    )
}

export default Hero;
