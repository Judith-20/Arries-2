import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import HomePage from "./pages/homepage";

import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { CartProvider } from "./contexts/CartProvider";

// import ContactUs from './pages/contact-us';
import GetStarted from "./pages/get_started";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
// import Spinner from "./components/Spinner";

const Homepage = lazy(() => import("./pages/homepage"));
const Shop = lazy(() => import("./pages/shop"));
const Products = lazy(() => import("./components/productsdetails"));
const ProductsDetails = lazy(() => import("./components/productsdetails"));
const Cart = lazy(() => import("./components/cart"));
const Checkout = lazy(() => import("./components/checkout"));

// import { useLocalStorageState } from "./components/useLocalStorageState";



function App() {
  // const [cart, setCart] = useState([]);

  // for the local storage
  // const[cart, setCart] = useLocalStorageState([], "cart")

  

  return (
    <AuthProvider>
      <CartProvider>
      <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
          {/* <Suspense fallback={<Spinner/>}> */}
          <Routes>
          <Route index element={<Homepage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          {/* <Route path="/contact-us" element={<ContactUs />} /> */}
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<ProtectedRoute><Shop /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path="/product-details" element={<ProtectedRoute><ProductsDetails /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
          </Suspense>
      </BrowserRouter>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
