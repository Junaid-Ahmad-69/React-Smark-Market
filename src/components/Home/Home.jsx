import {Fragment} from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category"
import Products from "../Products/Products";

const Home = () => {
    return (
        <Fragment>
            <Banner/>
            <div className="main-content">
                <div className="layout">
                    <Category/>
                    <Products headingText="Popular Product"/>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
