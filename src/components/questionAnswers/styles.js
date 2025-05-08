
import styled from "styled-components";
export const Container = styled.div`
width:80%;
margin:40px auto;
  background-color: #fff;
  padding: 30px;
  display: grid;
grid-template-columns: 70% 30%;
gap: 10px;

@media (max-width: 768px) {
  grid-template-columns: 1fr;
  width:95%;
}
`;

export const LeftSection = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
margin-top:40px;
  font-size: 32px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
  text-align:center;
  font-family:'Jost';
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 30px;
  text-align:center;
`;

export const Accordion = styled.div`
  background-color: ${(props) => (props.isOpen ? "#f8f9fa" : "#f1f1f1")};
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: ${(props) => (props.isOpen ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none")};
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.isOpen ? "#2a5bff" : "#333")};
`;

export const AccordionContent = styled.div`
  padding: 15px;
  font-size: 14px;
  color: #555;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const Icon = styled.div`
  font-size: 14px;
  color: ${(props) => (props.isOpen ? "#2a5bff" : "#555")};
`;

export const RightSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Checklist = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
`;

export const ChecklistItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;

  svg {
    margin-right: 10px;
    color: #2a5bff;
  }
`;

export const ExperienceBox = styled.div`
  background-color: #2a5bff;
  color: #fff;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ExperienceYears = styled.h3`
  font-size: 36px;
  font-weight: 600;
  margin: 0;
`;

export const ExperienceText = styled.p`
  font-size: 12px;
  margin: 0;
`;
