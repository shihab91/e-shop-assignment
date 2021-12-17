import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ShippingAndPayment from "./components/ShippingAndPayment/ShippingAndPayment";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/payment" element={<ShippingAndPayment />}></Route>
          <Route path="/home" element={<ShippingAndPayment />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
