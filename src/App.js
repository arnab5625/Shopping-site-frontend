import Navbar from "./components/Navbar";
import Shop from "./pages/shop";
import Profile from "./pages/profile";
import Home from "./pages/home";
import CreateProduct from "./pages/createProduct";
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
          <Route path="/shop" element={<Shop />}>
          </Route>
          <Route path="/CreateProduct" element={<CreateProduct />}>
          </Route>
        </Routes>
      </main>
      
    </div>);
}

export default App;
