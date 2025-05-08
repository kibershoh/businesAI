import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  Container,
  Title,
  Subtitle,
  CarouselWrapper,
  CardGrid,
  Card,
  Author,
  Role,
  Nav,
  LeftCard,
  NavButton
} from "./styles";
const testimonials = [
  {
    text: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.",
    author: "TODD HIGGINS",
    role: "CUSTOMER",
  },
  {
    text: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.",
    author: "SARAH JOHNSON",
    role: "CUSTOMER",
  },
  {
    text: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.",
    author: "MICHAEL SMITH",
    role: "CUSTOMER",
  },
  {
    text: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.",
    author: "EMILY DAVIS",
    role: "CUSTOMER",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 2;
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  return (
    <Container>
      <LeftCard>
        <Title>WHAT THEY ARE TALKING ABOUT?</Title>
        <Subtitle>Trusted by more than 4,200 customers</Subtitle>
        <Nav>
          <NavButton onClick={handlePrev} disabled={index === 0}>
            <FaArrowLeft />
          </NavButton>
          <NavButton onClick={handleNext} disabled={index === maxIndex}>
            <FaArrowRight />
          </NavButton>
        </Nav>
      </LeftCard>
      <CarouselWrapper>
        <CardGrid index={index}>
          {testimonials.map((item, i) => (
            <Card key={i}>
              <p>{item.text}</p>
              <Author>{item.author}</Author>
              <Role>{item.role}</Role>
            </Card>
          ))}
        </CardGrid>
      </CarouselWrapper>

    </Container>
  );
}
