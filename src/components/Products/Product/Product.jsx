import "./Product.scss";
import {Fragment} from "react";
import prod from "../../../assets/products/earbuds-prod-1.webp"
const Product = () => {
    return (
        <Fragment>
            <div className="product-card">
                <div className="products-thumbnail">
                    <img src={prod} alt="procut-image"/>
                </div>
                <div className="product-details">
                    <span className="name">Products name</span>
                    <span className="price">&#8377:49</span>
                </div>
            </div>
        </Fragment>
    );
};

export default Product;
