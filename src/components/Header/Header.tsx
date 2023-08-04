import * as React from "react"
import "./Header.scss";

const Header: React.FC = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return(
        <section className="header-container">
            <div className="header-flex">
                <a href="/"><span>00</span><br/>home</a>
                <a href="#info"><span>01</span><br/>info</a>
                <a href="#projects"><span>02</span><br/>featured</a>
                <a href="#contact"><span>03</span><br/>contact</a>
            </div>
            <div className="top-header-container" onClick={scrollToTop}>
                <div className="top-text">top</div>
                <div className="top-arrow">↑</div>
            </div>
        </section>
    )
}

export default Header;
