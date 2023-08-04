import * as React from "react"
import "./NumberBubble.scss";

type NumberBubbleProps = {
    number: string;
}

const NumberBubble: React.FC<NumberBubbleProps> = ({
    number,
}) => {
    return(
        <div className="number-bubble">
            {number}
        </div>
    )
}

export default NumberBubble;
