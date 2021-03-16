import { useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import useOutsideClick from "../hooks/useOutsideClick";
const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  @media (min-width: 768px) {
    margin: 0 1rem;
  }
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
    padding: 1rem;
    position: fixed;
    left: ${(props) => (props.isNavOpen ? "0" : "-100%")};
    top: 0;
    bottom: 0;
    width: 60vw;
    flex-direction: column;
    justify-content: start;
    background-color: red;
    margin: 0;
    transition: left 0.3s ease-in;
    z-index: 3;
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
  @media (min-width: 768px) {
    padding: 0.25rem 0.75rem;
  }
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
      <CloseNavButtonListItem style={{ textAlign: "right" }}>
        <CloseNavButton onClick={closeMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="black" />
          </svg>
        </CloseNavButton>
      </CloseNavButtonListItem>
      <NavItem onClick={closeMenu}>
        <Link href="/products">
          <UnstyledLink>Products</UnstyledLink>
        </Link>
      </NavItem>
      <NavItem onClick={closeMenu}>
        <Link href="/installation">
          <UnstyledLink>Installation</UnstyledLink>
        </Link>
      </NavItem>
    </NavItemsUl>
  );
};
export default NavItems;
