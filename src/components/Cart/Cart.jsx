import "./Cart.scss";
import {Fragment} from "react";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

const Cart = ({closeCart}) => {
    return (
        <Fragment>
            <div className="cart-panel">
                <div className="cart-overlay"></div>
                <div className="cart-content">
                    <div className="cart-header">
                        <span className="heading">Shopping Cart </span>
                        <span className="close-btn" onClick={closeCart}>
                            <MdClose/>
                            <span className="text">Close</span>
                        </span>
                    </div>
                    {/*<div className="empty-cart">*/}
                    {/*    <BsCartX/>*/}
                    {/*    <span>No product in cart.</span>*/}
                    {/*    <button className="return-cta">RETURN TO SHOP</button>*/}
                    {/*</div>*/}
                    <>
                        <CartItem/>
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">$Subtotal:</span>
                                <span className="text total">$123</span>
                            </div>
                            <div className="footer-cta">
                                <button className="checkout-cta">Checkout</button>
                            </div>
                        </div>
                    </>


                </div>
            </div>
        </Fragment>
    );
};

export default Cart;
