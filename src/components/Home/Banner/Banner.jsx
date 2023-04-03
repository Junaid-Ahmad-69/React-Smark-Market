import "./Banner.scss";
import {Fragment} from "react";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return (
        <Fragment>
            <section className="hero-banner">
                <div className="content">
                    <div className="text-content">
                        <h1>SALES</h1>
                        <p> Convallis interdum purus adipiscing
                            dis parturient montes in a quam a
                            eleifand montes parturient posuere
                            curae tempor
                        </p>
                        <div className="cta-buttons">
                            <button className="banner-cta">Read More</button>
                            <button className="banner-cta active">Shop Now</button>
                        </div>
                    </div>
                    <img src={BannerImg} className="banner-image" alt="banner-image"/>
                </div>
            </section>
        </Fragment>
    );
};

export default Banner;
