import { useEffect, useState } from "react";

const useMethods = () => {
  const [methods, setMethods] = useState([]);
  useEffect(() => {
    fetch("./paymentAndDeliveryMethods.json")
      .then((res) => res.json())
      .then((data) => setMethods(data));
  }, []);
  return { methods };
};
export default useMethods;
