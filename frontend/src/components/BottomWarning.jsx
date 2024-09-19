import { Link } from "react-router-dom";

export function BottomWarning({label,buttonText, to}){
    return <div>
        <div>{label}</div>
        <Link className="pointer underline p1-1 cursor-pointer" to={to} >
            {buttonText}
        </Link>
    </div>
}