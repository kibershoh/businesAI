import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import {
  NavbarContainer,
  Logo,
  MenuButton,
  Sidebar,
  CloseButton,
  SidebarContent,
  SidebarMenu,
  SocialIcons,
  SearchWrapper,
  HelpSection,
  SocialHelp,
  ResponsiveSidebar,
  DesktopMenu
} from './styles';
const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <NavbarContainer>
        <Logo>CreativeLogo</Logo>
        <MenuButton onClick={toggleSidebar}>&#9776;</MenuButton>
        <DesktopMenu>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">PAGES</a>
          </li>
          <li>
            <a href="#">CASE SHOP</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTENT</a>
          </li>
        </DesktopMenu>
        <SocialHelp>
          <SocialIcons>
             <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
          </SocialIcons>
          <SearchWrapper show={showSearch}>
            <div onClick={toggleSearch}>
               {
                showSearch ? <IoCloseOutline/> : <FaSearch/>
              }
            </div>
            <input type="text" placeholder="Search..." />
          </SearchWrapper>
          <HelpSection>
            <span>Need help?</span>
            <span>+92 666 888 0000</span>
          </HelpSection>
        </SocialHelp>
      </NavbarContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
       <ResponsiveSidebar>
         <SidebarContent>
          <SidebarMenu>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">PAGES</a>
            </li>
            <li>
              <a href="#">CASE STUDIES</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">CONTENT</a>
            </li>
          </SidebarMenu>
           <SocialIcons>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </SocialIcons>
            <SearchWrapper show={showSearch}>
              <div onClick={toggleSearch}>
               <FaSearch/>
              </div>
              <input type="text" placeholder="Search..." />
            </SearchWrapper>
            <HelpSection>
              <span>Need help?</span>
              <span>+92 666 888 0000</span>
            </HelpSection>
        </SidebarContent>
       </ResponsiveSidebar>
      </Sidebar>
    </>
  );
};

export default Navbar;
