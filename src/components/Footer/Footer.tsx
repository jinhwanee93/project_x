import * as React from "react"
import ContactButton from "../Buttons/ContactButton";
import "./Footer.scss";

const Footer: React.FC = () => {
    return(
        <section className="footer-container">
            <div className="footer-connect-wrapper">
                <p className="footer-connect">Looking to connect?</p>
                <ContactButton/>
            </div>
            <p className="footer-subcopy">Designed & developed by Alexandre Kim</p>
        </section>
    )
}

export default Footer;
