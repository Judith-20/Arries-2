// import React from 'react';
// import './index.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from './pages/homepage';
// import ContactUs from './pages/contact-us';
// import GetStarted from './pages/get_started';
// import Login from './pages/login';
// import Shop from './pages/shop';
// import Products from './pages/products';

// function App() {

//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route>
//       {/* <Route path="/" element={ <Home title="Home" /> } /> */}
//       <Route path="/" element={<HomePage />} />
//       <Route path="/contact-us" element={<ContactUs />} />
//       <Route path="/get-started" element={<GetStarted />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/shop" element={<Shop />} />
//       <Route path="/products" element={<Products />} />
//       </Route>
//     </Routes>
    
//     </BrowserRouter>
//       <HomePage/>
//     </>
//   )
// }

// export default App

import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
// import ContactUs from './pages/contact-us';
import GetStarted from './pages/get_started';
import Login from './pages/login';
import Shop from './pages/shop';
import Products from './pages/productsdetails';
import ProductsDetails from './pages/productsdetails';
import Cart from './pages/cart';
import Checkout from './pages/checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-details" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
