
import styled, { createGlobalStyle } from "styled-components";
export const Section = styled.div`
  background-color: #0b132b;
  padding: 3rem 0;
  text-align: center;
  height:60vh;
  
  position:relative;
   @media (max-width: 768px) {
    position:static;
    height:auto;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const StatItem = styled.div`
  color: #fff;
  text-align: center;
  margin: 1rem;
`;

export const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  background-color: #1c2541;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const StatNumber = styled.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
  color: #fff;
`;

export const StatLabel = styled.p`
  font-size: 1rem;
  color: #a9b7d1;
  margin: 0;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  position:absolute;
  left:20%;
  bottom:-30px;
   @media (max-width: 768px) {
    position:static;
  gap: 1rem;
  flex-direction:column;


  }

`;

export const Tab = styled.div`
  padding: 3rem 4rem;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#fff" : "#f2f2f2")};
  color: ${(props) => (props.active ? "#007bff" : "#333")};
  font-weight: ${(props) => (props.active ? "700" : "500")};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #e9e9e9;
  }
`;
