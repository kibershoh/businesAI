import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  margin:60px 5px;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  gap:30px;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  margin-bottom:35px;
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  background: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

export const IconImg = styled.img`
  width:20px
  background:#EBF1FF;
  padding:10px;
  border-radius:5px;
`;

export const Content = styled.div`
  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
    color: #666;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  border-left: 2px solid #999;
  padding-left: 1rem;
`;

export const Paragraph = styled.p`
  margin: 0 0 1rem 0;
  color: #666;
  font-size: 0.9rem;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 0.9rem;
  display: flex;
  align-items: center;

  &:before {
    content: "—";
    color: #2196f3;
    margin-right: 0.5rem;
  }
`;
