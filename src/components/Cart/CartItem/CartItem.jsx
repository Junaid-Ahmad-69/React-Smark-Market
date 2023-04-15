import "./CartItem.scss";
import {Fragment} from "react";
import {MdClose} from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"

const CartItem = () => {
    return (
        <Fragment>
            <div className="cart-products">
                <div className="cart-product">
                    <div className="img-container">
                        <img src={prod} alt=""/>
                    </div>
                    <div className="prod-details">
                        <span className="name">product name</span>
                        <MdClose className="close-btn"/>
                        <div className="qty-button">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <div className="text">
                            <span>3</span>
                            <span>x</span>
                            <span className="highlight">$4000</span>
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    );
};

export default CartItem;
