import "./Category.scss";
import Products from "../Products/Products"
import {Fragment} from "react";

const Category = () => {
    return (
        <Fragment>
            <div className="category-main-content">
                <div className="layout">
                    {<div className="category-title">Category Title</div>}
                    <Products innerPage={true}/>
                </div>
            </div>
        </Fragment>
    )
};

export default Category;
