import styled from "styled-components";

export const Container = styled.div`
  font-family: "Jost", sans-serif;
  background-color: #0d0c22;
  color: white;
  padding: 50px 20px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.05px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.05px;
  margin-bottom: 8px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 40px;
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 790px; /* 3 cards * 250px + 2 gaps * 20px */
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%; /* single card on mobile */
  }
`;

export const CardGrid = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease;
  transform: translateX(
    ${(props) =>
      -props.index *
      (props.itemsPerPage === 3 ? 790 : 250 + 20)}px
  ); 
  /* shift: full page width per index */
`;

export const Card = styled.div`
  background-color: #000;
  width: 250px;
  height: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  padding:15px;
  color: white;
  border-radius: 8px;
  
`;

export const CardTitle = styled.p`
  width:35px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
    font-family: 'Jost', sans-serif;
    text-align:start;

`;

export const ReadMore = styled.a`
  font-size: 12px;
  color: #aaa;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardIcon = styled.img`
   width:70px;

`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 790px;
  margin: 20px auto 0;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: 1px solid #555;
  padding: 10px;
  color: white;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #2a5bff;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    font-size: 20px;
  }
`;
export const MeetText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  margin: 40px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #555;
    margin: 0 10px;
  }
  margin: 20px 0;
`;
 

export const ReadMoreBtn = styled.div`
  display:flex;
  justify-content:space-between;
  gap:15px;
`;
