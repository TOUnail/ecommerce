import { useEffect } from "react";
import useCart from "../hooks/useCart";
const Success = () => {
  const { clearCart } = useCart();
  useEffect(() => {
    clearCart();
  }, []);
  return <div>Success Page</div>;
};
export default Success;
