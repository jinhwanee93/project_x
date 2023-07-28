import * as React from "react"
import "./ContactButton.scss";

const ContactButton: React.FC = () => {
    return(
        <a className="button-container reverse" href="mailto:alexandrekim93@gmail.com">
            <span className="button-content--hidden">contact me</span>
            <div className="marquee-track">
                <div className="marquee-inner">
                    <span>contact me</span>
                    <span>contact me</span>
                    <span>contact me</span>
                    <span>contact me</span>
                    <span>contact me</span>
                    <span>contact me</span>
                </div>
            </div>
        </a>
    )
}

export default ContactButton;
