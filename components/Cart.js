import { useRef } from "react";
import styled from "styled-components";
import useCart from "../hooks/useCart";
import useOutsideClick from "../hooks/useOutsideClick";
import { useRouter } from "next/router";
const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background: red;
  width: 60vw;
  padding: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.2s ease-in;
  @media (min-width: 768px) {
    width: 40vw;
  }
  @media (min-width: 1280px) {
    width: 20vw;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Close = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: none;
  }
`;
const ItemList = styled.ul`
  padding: 0;
`;
const Item = styled.li`
  list-style: none;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
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
const Cart = () => {
  const router = useRouter();
  const ref = useRef();
  const { cart, isOpen, closeCart, total, removeFromCart } = useCart();
  const handleClick = () => {
    closeCart();
  };
  const toCheckoutPage = () => {
    closeCart();
    router.push("/checkout");
  };
  useOutsideClick(ref, () => {
    if (isOpen) {
      closeCart();
    }
  });
  return (
    <Container ref={ref} isOpen={isOpen}>
      <Header>
        <div>My Cart</div>
        <Close onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="black" />
          </svg>
        </Close>
      </Header>
      {cart.length > 0 ? (
        <>
          <div>
            <ItemList>
              {cart.map((product) => {
                return (
                  <Item key={product.id}>
                    <div>
                      <span>{product.name}</span>
                      <span>{product.qty}</span>
                      <span>${product.price / 100}</span>
                    </div>
                    <div>
                      <button onClick={() => removeFromCart(product.id)}>
                        X
                      </button>
                    </div>
                  </Item>
                );
              })}
            </ItemList>
          </div>
          <Total>
            <span>Total</span>
            <span>${total / 100}</span>
          </Total>
          <CheckoutBtn onClick={toCheckoutPage}>Checkout</CheckoutBtn>
        </>
      ) : (
        <p>Empty Cart</p>
      )}
    </Container>
  );
};

export default Cart;
