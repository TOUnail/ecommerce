import styled from "styled-components";
import { Normalize } from "styled-normalize";
import Navbar from "../components/Navbar";
const Container = styled.div`
  background: #efefef;
`;
const App = ({ Component, pageProps }) => (
  <Container>
    <Normalize />
    <Navbar />
    <Component {...pageProps} />
    <div>footer</div>
  </Container>
);
export default App;
