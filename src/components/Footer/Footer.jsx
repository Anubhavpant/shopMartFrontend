import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        ShopMart-Made with ❤️. 
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Dehradun,Uttarakhand.
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 8630979238</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: anubhavpant2000@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text" onClick={()=>navigate("/")}>Home</span>
                    <span className="text" onClick={()=>navigate("/about")}>About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;