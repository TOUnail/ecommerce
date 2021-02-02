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
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;
const Navbar = () => {
  return (
    <Nav>
      <Link href="/">
        <UnstyledLink>Logo</UnstyledLink>
      </Link>
      <Link href="/products">
        <UnstyledLink>Products</UnstyledLink>
      </Link>
    </Nav>
  );
};
export default Navbar;
