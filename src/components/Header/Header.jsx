import {useEffect, useState, useContext} from "react";
import {useNavigation} from "react-router-dom";
import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import search from "./Search/Search";
import Cart from "../Cart/Cart";
import {Context} from "../../utils/context";
import "./Header.scss";

const Header = () => {

    const [scroll, setScroll] = useState(false)
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
                    <TbSearch/>
                    <AiOutlineHeart/>
                    <span className="cart-icon">
                        <CgShoppingCart/>
                        <span>5</span>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
