import styled from "styled-components";
import GlobalStyle from "../theme/globalStyle";
import { Normalize } from "styled-normalize";
import Navbar from "../components/Navbar";
import CartProvider from "../context/Cart";
import Cart from "../components/Cart";
// https://iconduck.com/
//https://tympanus.net/codrops/2019/09/03/how-to-dynamically-change-the-colors-of-product-images-using-css-blend-mode-and-svg/
const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-width: 2148px;
  margin: 0 auto;
  min-height: 100vh;
`;
const Footer = styled.div`
  padding: 4rem 0;
`;
const App = ({ Component, pageProps }) => (
  <CartProvider>
    <Container>
      <Normalize />
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer>&copy; Copyright Paramice 2021</Footer>
    </Container>
    <Cart />
  </CartProvider>
);
export default App;
