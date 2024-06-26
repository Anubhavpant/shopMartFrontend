import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct"; 
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import About from "./components/About/About";
import Success from "./components/Success/Success";
import Failure from "./components/Failure/Failure";




function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} /> 
            <Route path="/category/:id" element={<Category />} />
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<Failure />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
          <Newsletter />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
