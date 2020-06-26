import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";

const Card = ({ product, showViewProductButton = true }) => {
    const showViewButton = showViewProductButton => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="mr-2">
                    <button className="btn btn-outline-primary mt-2 mb-2">
                        INFO
                    </button>
                </Link>
            )
        );
    };

    

    return (
        <div className="card">
            <div className="card-header name">{product.name}</div>
            <div className="card-body">
                <ShowImage item={product} url="product" />
                <p className="lead mt-2">
                    {product.description.substring(0, 100)}
                </p>
                <p className="black-9">
                {product.category && product.category.name}
                </p>
                

                
                <br />

                {showViewButton(showViewProductButton)}

                
            </div>
        </div>
    );
};

export default Card;
