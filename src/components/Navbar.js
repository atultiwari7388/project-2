import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaReact } from "react-icons/fa";
import Bars from "../images/bar.gif";
// import { css } from "styled-components";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #77b1;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: #000;
  display: flex;
  font-weight: bolder;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid #223;
    /* color: #222; */
    transition: all 1s ease;
  }
`;

// const Logo = styled(Link)`
//   margin-right: 0.5rem;
//   font-size: 2rem;
//   color: #afc;
// `;

const NavLogo = styled(Link)`
  color: #24b;
  font-weight: bolder;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const NavIcon = styled(FaReact)`
  margin-right: 0.5rem;
`;

const MenuBars = styled.i`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 35%);
  } ;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 760px) {
    display: none;
  } ;
`;

const NavMenuLinks = styled(Link)`
  ${NavLink};
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 760px) {
    display: none;
  } ;
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLogo to="/">
        <NavIcon />
        React Dev
      </NavLogo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
