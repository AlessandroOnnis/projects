import { Link } from "react-router-dom";

export function Card({type, endpoint, img, title, posterType}) {
    return (
        <div className={type}>
            <Link to={endpoint}>
                <img
                    className={posterType}
                    src={img}
                    alt={`${title} poster`}
                />
                <h4>{title}</h4>
            </Link>
        </div>
    )
}