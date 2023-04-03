import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

import "./Newsletter.scss";
import {Fragment} from "react";

const Newsletter = () => {
    return (
        <Fragment>
            <div className="newsLetter-section">
                <div className="newsLetter-content">
                    <span>NewsLetter</span>
                    <span>Sign up for latest updates and offers</span>
                    <form onSubmit={(e) => e.preventDefault()} className="newsLetter-form">
                        <input type="email" placeholder="Email Address"/>
                        <button>Subscribe</button>
                    </form>
                    <div className="newsLetter-desc">
                        Will be used in accordance with our Privacy Policy
                    </div>
                    <div className="newsLetter-icons">
                        <div className="icon">
                            <FaFacebookF size={14}/>
                        </div>
                        <div className="icon">
                            <FaInstagram size={14}/>
                        </div>
                        <div className="icon">
                            <FaTwitter size={14}/>
                        </div>
                        <div className="icon">
                            <FaLinkedinIn size={14}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Newsletter;
