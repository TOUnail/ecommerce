import Link from "next/link";
import styled from "styled-components";
const LogoText = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
  display: inline;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  font-size: inherit;
`;
const LogoLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;
const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  margin: 0 1rem;
  &:hover {
    cursor: pointer;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;
const NavItems = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/">
          <LogoLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="mdi-mouse-variant"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14,7H10V2.1C12.28,2.56 14,4.58 14,7M4,7C4,4.58 5.72,2.56 8,2.1V7H4M14,12C14,14.42 12.28,16.44 10,16.9V18A3,3 0 0,0 13,21A3,3 0 0,0 16,18V13A4,4 0 0,1 20,9H22L21,10L22,11H20A2,2 0 0,0 18,13H18V18A5,5 0 0,1 13,23A5,5 0 0,1 8,18V16.9C5.72,16.44 4,14.42 4,12V9H14V12Z" />
            </svg>
            <LogoText>Paramice</LogoText>
          </LogoLink>
        </Link>
      </div>
      <NavItems>
        <Link href="/products">
          <UnstyledLink>Products</UnstyledLink>
        </Link>
        <Link href="/installation">
          <UnstyledLink>Installation</UnstyledLink>
        </Link>
      </NavItems>
      <div>Cart</div>
    </Nav>
  );
};
export default Navbar;
