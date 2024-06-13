import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";

export const HamburgerMenu = styled.div`
  position: relative;
`;

export const MenuToggle = styled.input`
  opacity: 0;
  &:checked + label > span {
    transform: rotate(45deg);
  }
  &:checked + label > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  &:checked + label > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  &:checked ~ ul {
    top: 0 !important;
  }
`;

export const MenuBtn = styled.label`
  position: fixed;
  top: 36px;
  right: 36px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 15;

  span,
  span::before,
  span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: lime;
    transition-duration: 0.25s;
  }
  span::before {
    content: "";
    top: -8px;
  }
  span::after {
    content: "";
    top: 8px;
  }
`;

export const MenuBox = styled.ul`
  display: block;
  position: fixed;
  left: 0;
  top: -100%;
  z-index: 5;

  width: 100vw;
  height: 85%;
  margin: 0;
  padding: 20px 0;
  list-style: none;
  background-color: ${theme.palette.text.primary};
  box-shadow: 2px 2px 6px ${theme.palette.primary.light};
  transition: top 0.25s ease-in-out;
`;

export const MenuItem = styled(Link)<{ active?: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 34px 12px 56px;
  color: ${theme.palette.primary.main};
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  border-bottom: ${({ active }) => (active ? "2px solid #00ff00" : "none")};
  transition-duration: 0.25s;
  &:hover {
    background-color: #cfd8dc;
  }
`;

export const SubMenu = styled.ul`
  list-style: none;
  padding-left: 40px;
  padding-top: 10px;
`;

export const SubMenuItem = styled(Link)<{ active?: string }>`
  display: block;
  padding: 8px 0 8px 35px;
  color: ${theme.palette.primary.main};
  border-bottom: ${({ active }) => (active ? "2px solid #00ff00" : "none")};
  font-size: 18px;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const LogoItem = styled.li`
  padding: 7px 0 0 30px;
  margin-bottom: 30px;
`;
