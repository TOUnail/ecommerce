import Link from "next/link";
import styled from "styled-components";
const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`;
const Nav = styled.nav`
  background: red;
  padding: 2rem;
`;
const Navbar = () => {
  return (
    <Nav>
      <Link href="/">
        <UnstyledLink>Logo</UnstyledLink>
      </Link>
    </Nav>
  );
};
export default Navbar;
