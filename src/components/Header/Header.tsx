import * as React from "react"
import "./Header.scss";

const Header: React.FC = () => {
    return(
        <section className="header-container">
            <div>
                <h1 className="first-name">Alexandre Kim</h1>
                <p className="subcopy">Web Developer</p>
            </div>
        </section>
    )
}

export default Header;
