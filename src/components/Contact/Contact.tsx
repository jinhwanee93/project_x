import * as React from "react"
import ContactButton from "../Buttons/ContactButton";
import BorderBrackets from "../Assets/Borders/BorderBrackets";
import "./Contact.scss";

type ContactProps = {
    id: string;
}

const Contact: React.FC<ContactProps> = ({
    id,
}) => {
    return(
        <section id={id} className="section-container section-full">
            <BorderBrackets/>
            <div className="display-grid--50">
                <div></div>
                <div>
                    <span className="number-badge">03.</span>
                    <h2 className="subheadline">↳ Contact <span>(Chat with me)</span></h2>
                    
                    <p>Let's talk!</p>
                    <p>↳ +1 (661)-600-6196</p>
                    <p>↳ github.com/jinhwanee93</p>
                    <p>↳ linkedin.com/in/alexandrekim93</p>
                    <p>↳ ig:@xandrekim</p>

                    <p>SEND ME AN EMAIL</p>
                    <ContactButton/>
                </div>
            </div>
            <BorderBrackets type="bottom"/>
        </section>
    )
}

export default Contact;
