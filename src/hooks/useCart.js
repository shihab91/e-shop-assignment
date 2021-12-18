import { useEffect, useState } from "react";
import useAuth from "./useAuth";
const useCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartProducts(data));
  }, [user.email]);
  return [cartProducts];
};
export default useCart;
