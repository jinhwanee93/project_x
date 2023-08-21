import * as React from "react"
import "./AttributeButton.scss";

type AttributeProps = {
    text: string;
}

const AttributeButton: React.FC<AttributeProps> = ({
    text
}) => {
    return(
        <div className="att-button">
            <p>{text}</p>
        </div>
    )
}

export default AttributeButton;
