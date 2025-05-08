import { createGlobalStyle } from "styled-components";
import React from "react";
import t420 from '../../assets/icons/420.png'
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
body {
    font-family: 'Roboto', sans-serif;
}
`;
import {
  Section,
  StatsContainer,
  StatItem,
  IconWrapper,
  Icon,
  StatNumber,
  StatLabel,
  TabsContainer,
  Tab
} from "./styles";

const StatsComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Section>
        <StatsContainer>
          {[1, 2, 3, 4].map((item, index) => (
            <StatItem key={index}>
              <IconWrapper>
                <Icon src={t420} alt="icon" />
              </IconWrapper>
              <StatNumber>420</StatNumber>
              <StatLabel>CONSULTING SOLUTIONS</StatLabel>
            </StatItem>
          ))}
        </StatsContainer>
        <TabsContainer>
          <Tab active>BUSINESS GROWTH</Tab>
          <Tab>BUSINESS GROWTH</Tab>
          <Tab>BUSINESS GROWTH</Tab>
        </TabsContainer>
      </Section>
    </>
  );
};

export default StatsComponent;