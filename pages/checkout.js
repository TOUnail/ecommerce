import styled from "styled-components";
import useCart from "../hooks/useCart";
const ItemList = styled.ul`
  padding: 0;
`;
const Item = styled.li`
  list-style: none;
  margin-bottom: 1rem;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CheckoutBtn = styled.button`
  background: pink;
  font-size: 100%;
  outline: none;
  border: none;
  width: 100%;
  cursor: pointer;
  padding: 1rem 0;
`;
const Checkout = () => {
  const { cart, total } = useCart();
  const processPayment = () => {
    console.log("payment process");
  };
  return (
    <div>
      <h2>Checkout</h2>
      {cart.length > 0 ? (
        <>
          <div>
            <ItemList>
              {cart.map((product) => {
                return (
                  <Item key={product.id}>
                    <span>{product.name}</span>
                    <span>{product.qty}</span>
                    <span>${product.price / 100}</span>
                  </Item>
                );
              })}
            </ItemList>
          </div>
          <Total>
            <span>Total</span>
            <span>${total / 100}</span>
          </Total>
          <CheckoutBtn onClick={processPayment}>Checkout</CheckoutBtn>
        </>
      ) : (
        <p>No products in cart.</p>
      )}
    </div>
  );
};

export default Checkout;
