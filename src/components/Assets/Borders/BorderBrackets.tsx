import * as React from "react"
import "./BorderBrackets.scss";

type BorderBracketsProps = {
    type?: string;
}

const BorderBrackets: React.FC<BorderBracketsProps> = ({
    type,
}) => {
    return(
        <div className={`border-brackets ${type}`}>
        </div>
    )
}

export default BorderBrackets;
