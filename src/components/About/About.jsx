import React, { useContext } from 'react'
import "./About.scss";
import { Context } from '../../utils/context';

const About = () => {
  const {isDark} = useContext(Context)
  return (
    <div className={isDark?'about aboutDark':'about'}>
        <h1 className='heading'>About ShopMart</h1>
        <p className='para'>This ecommerce app is built in react using javascript and for backend i have used strapi.<br/>For payment,I have used Stripe Payment Integration.<br/>There are many different categories in which the user can shop i.e. Headphones,Bluetooth Speakers,Smart Watches and Wireless Earbuds.<br/>User can also checkout and pay using his card.<br/>User can also login using his google account.</p>
    </div>
  )
}

export default About
