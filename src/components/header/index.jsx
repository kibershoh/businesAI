import React from "react";
import {
  Section,
  Subtitle,
  Title,
  Button
} from './styles';


const Header = () => {
  return (
    <Section>
      <Subtitle>Welcome to Codeshaper</Subtitle>
      <Title>
        Consulting <br />
        For Every <br />
        Business
      </Title>
      <Button>Discover More</Button>
    </Section>
  );
};

export default Header;