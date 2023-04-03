import "./Category.scss";
import {Fragment} from "react";
import cat1 from "../../../assets/category/cat-1.jpg"
import cat2 from "../../../assets/category/cat-2.jpg"
import cat3 from "../../../assets/category/cat-3.jpg"
import cat4 from "../../../assets/category/cat-4.jpg"

const Category = () => {
    return (
        <Fragment>
            <div className="shop-by-category">
                <div className="categories">
                    <div className="category">
                        <img src={cat1} alt="bannerimage"/>
                    </div>

                    <div className="category">
                        <img src={cat2} alt="bannerimage"/>
                    </div>

                    <div className="category">
                        <img src={cat3} alt="bannerimage"/>
                    </div>

                    <div className="category">
                        <img src={cat4} alt="bannerimage"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Category;
