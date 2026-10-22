
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

function ProductPage() {
  return (
    <>
      <Navbar />
      <ProductDetails />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/product/syntech-5w40"
          element={<ProductPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
