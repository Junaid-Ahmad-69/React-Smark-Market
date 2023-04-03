import {
    FaLocationArrow,
    FaMobileAlt,
    FaEnvelope,
} from "react-icons/fa";
import Payment from "../../assets/payments.png"
import "./Footer.scss";
import {Fragment} from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h2 className="title">About</h2>
                        <p>Volutume accestium dolorume laudtuma,
                            totum acs ipsa quea ab illo inventro et quasia,
                            architetyum beatea vitea </p>
                    </div>

                    <div className="footer-section">
                        <h2 className="title">Contact</h2>
                        <div className="footer-icon">
                            <FaLocationArrow/>
                            <div className="footer-address">
                                Habib Chowk Link Gujranwala Road, Sheikhpura, Punjab
                                5400
                            </div>
                        </div>
                        <div className="footer-icon">
                            <FaMobileAlt/>
                            <div className="footer-address">
                                Phone: +92 313 4210104
                            </div>
                        </div>

                        <div className="footer-icon">
                            <FaEnvelope/>
                            <div className="footer-address">
                                Email: junaidsandhu21@gmail.com
                            </div>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h2 className="title">Categories</h2>
                        <div className="footer-address">Headphones</div>
                        <div className="footer-address">Smart Watches</div>
                        <div className="footer-address">Bluetooth Speaker</div>
                        <div className="footer-address">Witness Earbuds</div>
                        <div className="footer-address">Home Theaters</div>
                        <div className="footer-address">Projectors</div>
                    </div>
                    <div className="footer-section">
                        <h2 className="title">Pages</h2>
                        <div className="footer-address">Home</div>
                        <div className="footer-address">About</div>
                        <div className="footer-address">Privacy Policy</div>
                        <div className="footer-address">Return</div>
                        <div className="footer-address">Terms & Conditions</div>
                        <div className="footer-address">Contact us</div>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="bottomBar-content">
                        <div className="bottomBar-text">
                            SMART MARKET 2023 CREATED BY JUNAID SANDHU PREMIUM E-COMMERCE SOLUTIONS.
                        </div>
                        <a href="/">
                        <img src={Payment} alt="payment"/>
                        </a>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
};

export default Footer;
