
import styled from "styled-components";
export const Container = styled.div`
width:80%;
margin:50px auto;
  padding: 40px;
  text-align: center;
  display:flex;
  @media (max-width: 768px) {
      flex-wrap:wrap;
    width:95%;
  }
  
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 30px;
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  max-width: 700px;
  margin: 0 auto;
`;

export const CardGrid = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => -props.index * 100}%);
`;

export const Card = styled.div`
  flex: 0 0 calc(50% - 10px);
  background-color: white;
  padding: 20px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

export const Author = styled.p`
  font-weight: 700;
  color: #2a5bff;
  margin-top: 15px;
`;

export const Role = styled.p`
  font-size: 12px;
  color: #999;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 20px;
  gap: 10px;
`;
export const LeftCard = styled.div`
   text-align:start;
`;

export const NavButton = styled.button`
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #2a5bff;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
