import { Link } from "react-router-dom";

export default function SingleProduct({id, name, image, price}) {
    return (
        <div>
            <Link to={`/product/${id}`}>
                <img src={image} />
                <h3>{name}</h3>
                <span>£{price}</span>
            </Link>
        </div>
    )
}