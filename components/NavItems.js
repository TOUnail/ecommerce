import { useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import useOutsideClick from "../hooks/useOutsideClick";
const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  margin: 0 1rem;
  &:hover {
    cursor: pointer;
  }
`;
const NavItemsUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  list-style: none;
  font-weight: 500;
  @media (max-width: 767px) {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 60vw;
    flex-direction: column;
    justify-content: start;
    background-color: red;
    margin: 0;
    transform: translateX(${(props) => (props.isNavOpen ? "0" : "-100%")});
    transition: transform 0.2s ease-in;
  }
`;
const CloseNavButtonListItem = styled.li`
  padding: 0.25rem 0.75rem;
  @media (min-width: 768px) {
    display: none;
  }
`;
const CloseNavButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: none;
  }
`;
const NavItem = styled.li`
  padding: 0.25rem 0.75rem;
`;
const NavItems = (props) => {
  const ref = useRef();
  const closeMenu = () => {
    props.setIsNavOpen(false);
  };
  useOutsideClick(ref, () => {
    if (props.isNavOpen) {
      closeMenu();
    }
  });
  return (
    <NavItemsUl ref={ref} isNavOpen={props.isNavOpen}>
      <CloseNavButtonListItem>
        <CloseNavButton onClick={closeMenu}>X</CloseNavButton>
      </CloseNavButtonListItem>
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
    </NavItemsUl>
  );
};
export default NavItems;