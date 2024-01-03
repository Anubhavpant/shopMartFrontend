import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import {FaMoon, FaSun} from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const { user,loginWithRedirect,logout,isAuthenticated } = useAuth0();
  
  const { cartCount,setMode,isDark, showCart, setShowCart } = useContext(Context);

  
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""} ${isDark?'back-change':'back-orig'} `}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li><Link className={`${isDark?"light":"about-link"}`} to='/about'>About</Link></li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            SHOPMART
          </div>

          <div className="right">
            <TbSearch onClick={() => setSearchModal(true)} />
 
            {isDark?<FaSun onClick={()=>setMode(false)} />:<FaMoon onClick={()=>setMode(true)}/>}
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span className={`${!isDark?"change":""}`}>{cartCount}</span>}
            </span>
            <p>{isAuthenticated && <p className="login">Welcome,{user.name}</p>}</p>
            {isAuthenticated?<button className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>:<button  className="btn" onClick={() => loginWithRedirect()}>Log In</button>}
          </div>
        </div>
      </header>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
    </>
  );
};

export default Header;
