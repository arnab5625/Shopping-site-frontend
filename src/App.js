import Navbar from "./components/Navbar";
import AllProducts from "./pages/allProducts";
import Profile from "./pages/profile";
import Home from "./pages/home";
import ProductModification from "./pages/productModification";
import Mobile from "./pages/mobile";
import Tablet from "./pages/tablet";
import Laptop from "./pages/laptop"

import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}>
          </Route>
          <Route path="/all-products" element={<AllProducts />}>
          </Route>
          <Route path="/product-modification" element={<ProductModification />}>
          </Route>
          <Route path="/mobile-section" element={<Mobile/>}>
          </Route>
          <Route path="/tablet-section" element={<Tablet/>}>
          </Route>
          <Route path="/laptop-section" element={<Laptop/>}>
          </Route>
        </Routes>
      </main>
      
    </div>);
}

export default App;
