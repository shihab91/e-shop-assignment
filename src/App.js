import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ShippingAndPayment from "./components/ShippingAndPayment/ShippingAndPayment";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ShippingAndPayment />}></Route>
        <Route path="/home" element={<ShippingAndPayment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
