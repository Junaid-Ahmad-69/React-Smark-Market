import {useEffect, useState, useContext, Fragment} from "react";
import {useNavigation} from "react-router-dom";
import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import search from "./Search/Search";
import Cart from "../Cart/Cart";
import {Context} from "../../utils/context";
import "./Header.scss";
import Search from "./Search/Search";

const Header = () => {

    const [scroll, setScroll] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const showCartHandler = () => {
        setShowCart(!showCart);
    }
    const showSearchHandler = () => {
        setShowSearch(!showSearch);
    }
    const handleScroller = () => {
        const offset = window.scrollY;
        offset > 200 ? setScroll(true) : setScroll(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroller)
        return (() => {
            window.removeEventListener("scroll", handleScroller);
        })
    })

    return (
        <Fragment>
            <header className={`main-header ${scroll ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center">
                        Smart Market
                    </div>
                    <div className="right">
                        <TbSearch onClick={showSearchHandler}/>
                        <AiOutlineHeart/>
                        <span className="cart-icon" onClick={showCartHandler}>
                        <CgShoppingCart/>
                        <span>5</span>
                    </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart closeCart={showCartHandler}/>}
            {showSearch && <Search closeSearch={showSearchHandler}/>}
        </Fragment>
    );
};

export default Header;
