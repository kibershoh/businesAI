import React from 'react';
import { FaPlay } from 'react-icons/fa';
import carIcon from '../../assets/icons/carIcon.png';
import {
  Container,
  Section,
  LeftColumn,
  RightColumn,
  Heading,
  SubText,
  HighlightText,
  ProgressBarContainer,
  BarLabel,
  Bar,
  Progress,
  Contact,
  FeatureCards,
  Card,
  CaseStudiesSection,
  CaseStudyCards,
  StudyCard,
  BlueCard,
  GetPro,
  CarIcon
} from './styles';

const MarketCase = () => {
  return (
    <Container>
      <Section>
        <LeftColumn>
          <button style={{ background: '#0044ff',color:'#fff', border: 'none', width: 60, height: 60 }}><FaPlay/></button>
        </LeftColumn>
        <RightColumn>
          <Heading>WE'RE LEADING IN THE MARKET</Heading>
          <SubText>Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.</SubText>
          <HighlightText>We have 35+ years of experience. We offer marketing and consulting services</HighlightText>

          <ProgressBarContainer>
            <BarLabel>CONSULTING</BarLabel>
            <Bar><Progress percent="88%" /></Bar>
            <BarLabel>ADVICES</BarLabel>
            <Bar><Progress percent="66%" /></Bar>
          </ProgressBarContainer>

          <Contact>
            Have any question? Give us a call <br />
            <strong>+92 666 888 0000</strong>
          </Contact>
        </RightColumn>
      </Section>

      <FeatureCards>
        <Card>
          <strong>01</strong>
          <GetPro>
          <h4>GET PROFESSIONAL ADVICE</h4>
          <p>There are many variations of available but the majority have suffered alteration.</p>
          </GetPro>
        </Card>
        <Card>
          <strong>02</strong>
          <GetPro>
            <h4>TRUSTED & PROFESSIONAL</h4>
          <p>There are many variations of available but the majority have suffered alteration.</p>
          </GetPro>
        </Card>
      </FeatureCards>

      <CaseStudiesSection>
        <h2>NEW CASE STUDIES</h2>
        <p>We help our clients renew their business</p>
        <CaseStudyCards>
          <StudyCard>
            <CarIcon src={carIcon}/>
            <p>THOUGHT LEADERSHIP</p>
            <h4>BUSINESSES GROWTH</h4>
          </StudyCard>
          <StudyCard>
                        <CarIcon src={carIcon}/>

            <p>THOUGHT LEADERSHIP</p>
            <h4>BUSINESSES GROWTH</h4>
          </StudyCard>
          <BlueCard>
                        <CarIcon src={carIcon}/>

            <p>THOUGHT LEADERSHIP</p>
            <h4>BUSINESSES GROWTH</h4>
          </BlueCard>
        </CaseStudyCards>
      </CaseStudiesSection>
    </Container>
  );
};

export default MarketCase;
