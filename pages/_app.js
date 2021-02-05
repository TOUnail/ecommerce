import styled from "styled-components";
import GlobalStyle from "../theme/globalStyle";
import { Normalize } from "styled-normalize";
import Navbar from "../components/Navbar";
// https://iconduck.com/

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-width: 2148px;
  margin: 0 auto;
`;
const App = ({ Component, pageProps }) => (
  <Container>
    <Normalize />
    <GlobalStyle />
    <Navbar />
    <Component {...pageProps} />
    <div>footer</div>
  </Container>
);
export default App;
