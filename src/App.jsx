import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import { products } from "./components/data";
import { corporateProducts } from "./components/data";
import { dresses } from "./components/data";

// import ContactUs from './pages/contact-us';
import GetStarted from "./pages/get_started";
import Login from "./pages/login";
import Shop from "./pages/shop";
import Products from "./components/productsdetails";
import ProductsDetails from "./components/productsdetails";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  // adding to cart
  function handleAddToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart?.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: item.price * item.quantity,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { ...product, quantity: product.quantity, price: product.price },
      ]);
    }
  }

  // calculating total cart quantity
  // function getTotalQuantity() {
  //   setCart(cart.reduce((total, item) => total + item.quantity, 0))
  // }

  //decreasing the quantity
  function handleDecrease(id) {
    setCart(
      cart?.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              // price: item.price * item.quantity,
            }
          : item
      )
    );
    console.log(id);
  }
  //increasing the quantity
  function handleIncrease(id) {
    setCart(
      cart?.map((item) =>
        // item.id === id && item.quantity >= 1
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              // price: item.price * item.quantity,
            }
          : item
      )
    );
    console.log(id);
  }

  // removing an item from the cart
  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              // totalQuantity={getTotalQuantity}
              cart={cart}
              onAddProducts={handleAddToCart}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HomePage
              products={products}
              cart={cart}
              // totalQuantity={getTotalQuantity}
              onAddProducts={handleAddToCart}
            />
          }
        />
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/shop"
          element={
            <Shop
              corporateProducts={corporateProducts}
              dresses={dresses}
              onAddProducts={handleAddToCart}
              cart={cart}
              // totalQuantity={getTotalQuantity}
            />
          }
        />
        <Route path="/products" element={<Products onAddProducts={handleAddToCart} cart={cart} />} />
        <Route
          path="/product-details"
          element={
            <ProductsDetails onAddProducts={handleAddToCart} cart={cart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              onAdd={handleIncrease}
              onReduce={handleDecrease}
              onRemove={removeFromCart}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
