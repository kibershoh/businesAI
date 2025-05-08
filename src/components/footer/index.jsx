import React, { useState } from "react";
import {
  FooterContainer,
  ContentWrapper,
  Section,
  List,
  ListItem,
  Dropdown,
  DropdownButton,
  DropdownContent,
  NewsletterBox,
  FooterBottom,
  SocialIcons
} from './styles';

const Footer = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <FooterContainer>
      <ContentWrapper>
        <Section>
          <h4>CreativeLogo</h4>
          <p>Welcome to our consultancy agency. Lorem ipsum simply text amet...</p>
          <p>📞 +92 666 888 0000</p>
          <p>📧 needhelp@company.com</p>
          <p>📍 66 Brooklyn Street New York, USA</p>
        </Section>

        <Section>
          <h4>EXPLORE</h4>
          <List>
            {["About", "Meet our Team", "Case studies", "Latest News", "Contact", "Support", "Terms of use", "Privacy & Policy", "Help"].map((item, index) =>
              index < 3 ? (
                <ListItem key={index}>{item}</ListItem>
              ) : (
                <Dropdown key={index}>
                  {index === 3 && (
                    <DropdownButton onClick={toggleDropdown}>
                      {showDropdown ? "Show Less" : "Show More"}
                    </DropdownButton>
                  )}
                  {showDropdown && <DropdownContent>{item}</DropdownContent>}
                </Dropdown>
              )
            )}
          </List>
        </Section>

        <Section>
          <h4>NEWSLETTER</h4>
          <NewsletterBox>
            <p>Subscribe for latest articles and resources</p>
            <div>
              <input type="email" placeholder="Email Address" />
              <button>REGISTER</button>
            </div>
          </NewsletterBox>
        </Section>
      </ContentWrapper>

      <FooterBottom>© Copyright 2025 by Company</FooterBottom>

      <SocialIcons>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;