
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #444;
  color: #fff;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid #666;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
 letter-spacing: 0.16px;
weight:600;
color:#FFFFFF;
padding-right:10px;
  font-family: 'Jost', sans-serif;

  border-right: 1px solid #fff;
  display: grid;
  place-items: center;
  height: 100%;

  @media (max-width: 768px) {
    border: none;
  }
`;

export const MenuButton = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  // display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-100%")};
  width: 300px;
  height: 100%;
  background-color: #333;
  color: #fff;
  padding: 2rem 1rem;
  transition: left 0.3s ease-in-out;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CloseButton = styled.div`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  text-align: right;

  &:hover {
    color: #007bff;
  }
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin: 1rem 0;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.2rem;

      &:hover {
        color: #007bff;
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;        
  justify-content: center;    
  align-items: center;        
  border-right: 1px solid #fff;   
  padding: 18px;             
  height: 100%;  
   

  @media (max-width: 768px) {
    border: none;
  }
  a {
    margin: 0 0.5rem;
    color: #fff;
    font-size: 1.1rem;

    &:hover {
      color: #007bff;
    }
  }
  @media (max-width: 768px) {
    // display: none;
  }
  div {
    border-right: 1px solid #fff;
  }
`;

export const SearchWrapper = styled.div`
 display: flex;
  flex-direction: row;        
  justify-content: center;    
  align-items: center;        
  border-right: 1px solid #fff;   
  padding: 18px;             
  height: 100%;  
   

  @media (max-width: 768px) {
    border: none;
  }
  align-items: center;
  margin: 1rem 0;

  input {
    display: ${(props) => (props.show ? "block" : "none")};
    width: 80%;
    padding: 0.5rem;
    margin-left: 0.5rem;
    border: 1px solid #666;
    border-radius: 0.5rem;
    background-color: #444;
    color: #fff;
    outline:none
  }
`;

export const HelpSection = styled.div`
  text-align: center;
  font-size: 0.9rem;

  span {
    display: block;
  }
  @media (max-width: 768px) {
    // display: none;
  }
`;
export const SocialHelp = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    display: block;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ResponsiveSidebar = styled.div`
  display: none;
  
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const DesktopMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 1rem;

    a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        color: #007bff;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
