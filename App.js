import {BrowserRouter,Route,Routes} from 'react-router-dom'
import "./App.css";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JavaScript
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/navbar";
import Home from "./components/Home";
import Testimonal from "./components/Testimonal";
import Block1 from "./components/Block1";
import Block2 from "./components/Block2";
import HomeSlide from "./components/HomeSlide";
import Testimonal2 from "./components/Testimonal2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Product from './components/Product';
import Founder from './components/Founder';
import Whywe from './components/Whywe';
// import Slider from "./components/Slider";





function MainLayout (){
  return (
    <div>
     
      {/* <HomeSlide /> */}
      <Home />
      <Block1 />
      <Block2 />
      <Founder/>
      <Testimonal />
      <Testimonal2 />
      <Contact />
      <Whywe/>
      <Footer />
      {/* <Slider/> */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
