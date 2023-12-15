import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";
import "../../index.css";
import tw from "tailwind-styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 2fr;
  grid-column-gap: 2rem;
  /* display: flex;
  flex-direction: row;
  justify-content: space-around; */
  padding: 1rem;
  /* padding-top: 2rem; */
  @media screen and (max-width: 500px) {
    justify-content: center;
  }

  @media screen and (min-width: 501px) and (max-width: 950px) {
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    
    margin-top: min(20px, max(40px));
    margin-inline: min(30px, max(90px));
  }
  @media screen and (min-width: 1000px) and (max-width: 1535px) {
    
    margin-top: min(30px , max(40px));
    align-items: center;
    
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
  @media screen and (min-width: 501px) and (max-width: 950px) {
  }
`;
export const Div2 = styled.div`
  display: grid;
  grid-area: 1/3/2/4;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  text-align: center;
  @media screen and (max-width: 500px) {
    display: none;
  }

  @media screen and (min-width: 501px) and (max-width: 950px) {
    display: none;
  }

  @media screen and (min-width: 1000px) and (max-width: 1535px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    
  }

  gap: 3rem;
  /* background-color: var(--acent-color); */
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }

  @media screen and (min-width: 501px) and (max-width: 950px) {
    display: none;
  }
  @media screen and (min-width: 1000px) and (max-width: 1535px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    gap: 20px;
    &hover{
      background-color: var(--accent-color);
    }
    
  }
`;

export const Div4 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  justify-content: space-around;
  display: grid;
  justify-items: center;
  align-self: center;

  @media screen and (min-width: 501px) and (max-width: 500px) {
    display: block;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1000px) and (max-width: 1535px) {
    display: none;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.5rem;
  line-height: 16px;
  color: white;
  cursor: pointer;


  transition: 0.4s ease;
  &:hover {
    color: var(--accent-hover);
    opacity: 1;
    cursor: pointer;
    box-shadow: 10px 10px 5px #888888;
    /* box-shadow: 5px 5px 10px #888888, -5px -5px 10px #888888; */

  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
