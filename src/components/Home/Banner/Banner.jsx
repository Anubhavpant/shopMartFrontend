import React from "react";
import Typed from "typed.js";

import { useEffect,useRef } from "react";
import {Link} from "react-router-dom"

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";


const Banner = () => {

    

    const el = useRef(null);

    useEffect(()=>{
        const typed= new Typed(el.current,{
            strings:["Headphones","Wireless Earphones","Speakers","Smart Watches"],
            typeSpeed: 50,
            loop: true,
            backDelay: 900,
            backSpeed: 30,
            showCursor:false
        })
    },[])

    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">

                    <h1>WELCOME</h1>
                    <p className="typed">
                        Shop <span ref={el}></span>
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">
                            <Link  className="link" to="/about">
                            Read More
                            </Link>
                            </div> 
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt=""/>
                
            </div>
        </div>
    );
};

export default Banner;
