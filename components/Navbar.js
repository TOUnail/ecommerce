import Link from "next/link";
import styled from "styled-components";
const LogoText = styled.h1`
  display: inline;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
const LogoLink = styled.a`
  display: flex;
  align-items: center;
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
  padding: 0.2rem 1rem;
`;
const NavItems = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  list-style: none;
  font-weight: 500;
`;
const NavItem = styled.li`
  padding: 0.25rem 0.75rem;
`;
const Cart = styled.a`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  padding: 0.75rem;
  &:hover {
    cursor: pointer;
  }
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
        <NavItem>
          <Link href="/products">
            <UnstyledLink>Products</UnstyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/installation">
            <UnstyledLink>Installation</UnstyledLink>
          </Link>
        </NavItem>
      </NavItems>
      <div>
        <Link href="/">
          <Cart>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.44898 14.398L2.89619 14.1743L2.89619 14.1743L2.44898 14.398ZM12.551 14.398L12.9982 14.6216L12.9982 14.6216L12.551 14.398ZM0.703196 6H14.2968V5H0.703196V6ZM14 5.7032V6.14196H15V5.7032H14ZM12.3859 14H2.61409V15H12.3859V14ZM1 6.14196V5.7032H0V6.14196H1ZM2.89619 14.1743C1.6492 11.6804 1 8.93031 1 6.14196H0C0 9.08555 0.685346 11.9887 2.00176 14.6216L2.89619 14.1743ZM2.61409 14C2.73356 14 2.84277 14.0675 2.89619 14.1743L2.00176 14.6216C2.11773 14.8535 2.35478 15 2.61409 15V14ZM12.1038 14.1743C12.1572 14.0675 12.2664 14 12.3859 14V15C12.6452 15 12.8823 14.8535 12.9982 14.6216L12.1038 14.1743ZM14 6.14196C14 8.93031 13.3508 11.6804 12.1038 14.1743L12.9982 14.6216C14.3147 11.9887 15 9.08555 15 6.14196H14ZM14.2968 6C14.1329 6 14 5.86712 14 5.7032H15C15 5.31483 14.6852 5 14.2968 5V6ZM0.703196 5C0.314831 5 0 5.31483 0 5.7032H1C1 5.86712 0.867117 6 0.703196 6V5ZM3.92875 5.75725L6.92875 0.757248L6.07125 0.242752L3.07125 5.24275L3.92875 5.75725ZM8.07125 0.757248L11.0713 5.75725L11.9287 5.24275L8.92875 0.242752L8.07125 0.757248Z"
                fill="black"
              />
            </svg>
          </Cart>
        </Link>
      </div>
    </Nav>
  );
};
export default Navbar;
