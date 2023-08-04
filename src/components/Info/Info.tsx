import * as React from "react"
import BorderBrackets from "../Assets/Borders/BorderBrackets";
import NumberBubble from "../Assets/Bubble/NumberBubble";
import "./Info.scss";

type InfoProps = {
    id: string;
}

const Info: React.FC<InfoProps> = ({
    id,
}) => {
    return(
        <section id={id} className="section-container">
            <BorderBrackets/>
            <div className="display-grid--50">
                <div></div>
                <div>
                    <span className="number-badge">01.</span>
                    <h2 className="subheadline">↳ Info <span>(heya! &#128075;)</span></h2>
                </div>
            </div>
            <div className="display-grid--50">
                <div>
                    // something about yourself
                </div>
                <div className="profile-picture">
                    <NumberBubble number="1"/>
                    <p className="caption">photo_by: ig:@isaacusername</p>
                </div>
            </div>
            <BorderBrackets type="bottom"/>
        </section>
    )
}

export default Info;
