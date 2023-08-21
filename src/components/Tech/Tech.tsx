import * as React from "react"
import AttributeButton from "../Buttons/AttributeButton";
import "./Tech.scss";

const Tech: React.FC = () => {
    return(
        <section className="section-container">
            <div className="display-grid--50">
                <div>
                    <p>What I do</p>
                    <a>websites</a>
                </div>
                <div>
                    <p>Technologies</p>
                    <AttributeButton text="React"/>
                    <AttributeButton text="JavaScript"/>
                </div>
            </div>
        </section>
    )
}

export default Tech;
