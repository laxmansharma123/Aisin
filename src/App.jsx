
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import ProductDetails from "./pages/ProductDetails";
import Product5W30Semi from "./pages/Product5W30Semi";
import Product5W30Full from "./pages/Product5W30Full";
import Product20W50 from "./pages/Product20W50";
import Product15W40 from "./pages/Product15W40";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

function ProductPage({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Existing 5W-40 Product Page */}
        <Route
          path="/product/syntech-5w40"
          element={
            <ProductPage>
              <ProductDetails />
            </ProductPage>
          }
        />

        {/* 5W-30 Semi Synthetic */}
        <Route
          path="/product/econtech-5w30"
          element={
            <ProductPage>
              <Product5W30Semi />
            </ProductPage>
          }
        />

        {/* 5W-30 Fully Synthetic */}
        <Route
          path="/product/syntech-5w30"
          element={
            <ProductPage>
              <Product5W30Full />
            </ProductPage>
          }
        />

        {/* 20W-50 Mineral Motor Oil */}
        <Route
          path="/product/econtech-20w50"
          element={
            <ProductPage>
              <Product20W50 />
            </ProductPage>
          }
        />

        {/* 15W-40 MMO Motor Oil */}
        <Route
          path="/product/econtech-15w40"
          element={
            <ProductPage>
              <Product15W40 />
            </ProductPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
