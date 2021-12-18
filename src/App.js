import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ShippingAndPayment from "./components/ShippingAndPayment/ShippingAndPayment";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./components/Home/Home";
import ProductDetail from "./components/productDetail/ProductDetail";
import PrivateRoute from "./sharedComponents/Product/PrivateRoute/PrivateRoute";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import AddProduct from "./components/AddProduct/AddProduct";
import ManageProducts from "./components/ManageProducts/ManageProducts";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          {/* <Route path="/home" element={<ShippingAndPayment />}></Route> */}
          <Route
            path="/myorders"
            element={
              <PrivateRoute>
                <ShippingAndPayment />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/productDetail/:id" element={<ProductDetail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/makeadmin"
            element={
              <PrivateRoute>
                <MakeAdmin />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/addproduct"
            element={
              <PrivateRoute>
                <AddProduct />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/manageproducts"
            element={
              <PrivateRoute>
                <ManageProducts />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
