import styled from "styled-components";

// Parent container styling
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  margin:auto; /* Center horizontally */
  background-color: #444; /* Optional background color */
  padding: 20px 40px;
   @media (max-width: 768px) {
      padding: 20px;
        height: auto;

  }
`;

export const Subtitle = styled.p`
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #a9a9a9;
  margin: 0 0 10px 0;
`;

export const Title = styled.h1`
  font-family: "Jost", sans-serif;
  font-weight: 700;
  font-size: 90px;
  line-height: 100px;
  letter-spacing: -0.03px;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
   @media (max-width: 768px) {
      font-size: 25px; 
line-height: 30px;
  letter-spacing: -0.03px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 15px 30px;
  font-family: "Jost", sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
   @media (max-width: 768px) {
     font-size: 14px;
  }
`;