import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ShippingAndPayment from "./components/ShippingAndPayment/ShippingAndPayment";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ShippingAndPayment />
    </div>
  );
}

export default App;
