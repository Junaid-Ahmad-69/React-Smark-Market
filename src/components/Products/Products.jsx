import "./Products.scss";
import {Fragment} from "react";
import Product from "./Product/Product"

const Products = ({innerPage}) => {
    return (
        <Fragment>
            <div className="products-container">
                {!innerPage && <div className="product-heading">
                    Section heading
                </div>}
                <div className="products">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </Fragment>
    )
};

export default Products;
