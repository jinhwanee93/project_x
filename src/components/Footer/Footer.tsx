import * as React from "react"
import ContactButton from "../Buttons/ContactButton";
import "./Footer.scss";

const Footer: React.FC = () => {
    return(
        <section className="footer-container">
            <div className="footer-closing">
                <p className="footer-subcopy">All rights reserved © 2023 Alexandre Kim</p>
            </div>
        </section>
    )
}

export default Footer;
