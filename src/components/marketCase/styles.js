import styled from 'styled-components';

export const Container = styled.div`
width:80%;
  font-family: 'Arial', sans-serif;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;
  align-items:start;
`;

export const LeftColumn = styled.div`
  flex: 1 1 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-bottom:15px;
  }
`;

export const RightColumn = styled.div`
  flex: 1 1 500px;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

export const SubText = styled.p`
  color: #666;
  margin: 1rem 0;
`;

export const HighlightText = styled.p`
  color: #007bff;
  font-weight: bold;
`;

export const ProgressBarContainer = styled.div`
  margin: 1rem 0;
`;

export const BarLabel = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const Bar = styled.div`
  background-color: #eee;
  border-radius: 20px;
  overflow: hidden;
`;

export const Progress = styled.div`
  background-color: #0044ff;
  height: 10px;
  width: ${props => props.percent || '0%'};
`;

export const Contact = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
`;

export const FeatureCards = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #fff;
  display:flex;
  align-items:start; 
  gap:15px;

  padding: 1.5rem;
  flex: 1 1 300px;
  border-radius: 8px;
  box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.05);
  strong{
    background:#EBF1FF;
    padding:10px;
    border-radius:5px;
  } 
  h4{
    font-size:20px;
  }
  p{
    color:#726F84;
  }
  `;

export const CaseStudiesSection = styled.div`
  text-align: center;
  h2{
    margin:30px 0;
  }
  p{
    color:#8F8DA0;
  }
`;

export const CaseStudyCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top:20px;
`;

export const StudyCard = styled.div`
  background: #888;
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  padding: 1rem;
  gap:15px;
  color: #fff;
  text-align:start;
  border-radius:5px;

  h4{
    color:#FFFFFF;
  }
  p{
        color:#FFFFFF;

    font-size:12px;
  }
`;

export const BlueCard = styled(StudyCard)`
  background: #0044ff;
`;

export const GetPro = styled.div`
 display:flex;
 flex-direction:column;
 gap:10px;

`;
export const CarIcon = styled.img`
 width:30px;
`;
