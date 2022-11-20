import { Link } from "react-router-dom"

export function Navigator({link, text}) {
    return (
        <Link className="navigator" to={link}>
            {text}
        </Link>
    )
}