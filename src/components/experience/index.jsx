import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import icon1 from '../../assets/icons/icon1.png'
import {
  Container,
  SectionTitle,
  SectionSubtitle,
  CarouselWrapper,
  CardGrid,
  Card,
  CardTitle,
  ReadMore,
  CardIcon,
  Navigation,
  NavButton,
  MeetText,
  ReadMoreBtn
} from './styles'; // Fayl nomi va yo'lini moslashtiring

const items = [
  { title: "WEALTH MANAGEMENT", icon:icon1},
  { title: "RISK ANALYSIS", icon:icon1},
  { title: "TAX PLANNING", icon:icon1},
  { title: "INVESTMENT STRATEGY", icon:icon1},
  { title: "PORTFOLIO REVIEW", icon:icon1},
  { title: "MARKET INSIGHTS", icon:icon1},
  { title: "FINANCIAL REPORTS", icon:icon1},
];

export default function ExperienceSection() {
  const [index, setIndex] = useState(0);

  const isMobile = window.innerWidth <= 768;
  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = Math.ceil(items.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  return (
    <Container>
      <SectionTitle>REAL-WORLD EXPERIENCE</SectionTitle>
      <SectionSubtitle>
        The best business consulting firm you can count on!
      </SectionSubtitle>
      <CarouselWrapper>
        <CardGrid index={index} itemsPerPage={itemsPerPage}>
          {items.map((item, i) => (
            <Card key={i}>
              <CardTitle>{item.title}</CardTitle>
              <ReadMoreBtn>
                <ReadMore href="#">READ MORE</ReadMore>
              <CardIcon src={item.icon}/>
              </ReadMoreBtn>
            </Card>
          ))}
        </CardGrid>
      </CarouselWrapper>
      <MeetText>MEET THE PARTNERS</MeetText>
      <Navigation>
        <NavButton onClick={handlePrev} disabled={index === 0}>
          <FaArrowLeft />
        </NavButton>
        <NavButton onClick={handleNext} disabled={index === maxIndex}>
          <FaArrowRight />
        </NavButton>
      </Navigation>
    </Container>
  );
}
