import React, { useState } from "react";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import {
  Container,
  LeftSection,
  Title,
  Subtitle,
  Accordion,
  AccordionHeader,
  AccordionContent,
  Icon,
  RightSection,
  Checklist,
  ChecklistItem,
  ExperienceBox,
  ExperienceYears,
  ExperienceText
} from "./styles";

const QuestionAnswers = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      title: "Think ahead and boost your business?",
      content:
        "There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words believable.",
    },
    {
      title: "How consultancy experts work?",
      content: "Consultancy experts analyze the current state of your business and provide actionable insights.",
    },
    {
      title: "What is the best advice for growth?",
      content: "Focus on customer satisfaction and innovation to achieve sustainable growth.",
    },
    {
      title: "How to improve your business?",
      content: "Identify weak points and leverage technology to improve efficiency and productivity.",
    },
  ];

  const checklistItems = [
    "Naechtur cing elit.",
    "Suspe ndisse suscipit sagittis leo.",
    "Entum estibulum dignissim posuere.",
    "If you are going to use a passage.",
    "If you are going to use a passage test data.",
  ];

  return (
      <>
      <Title>QUESTION ANSWERS</Title>
        <Subtitle>We help our clients renew their business</Subtitle>
    <Container>
      <LeftSection>
        {questions.map((question, index) => (
          <Accordion key={index} isOpen={openIndex === index}>
            <AccordionHeader isOpen={openIndex === index} onClick={() => toggleAccordion(index)}>
              {index + 1}. {question.title}
              <Icon isOpen={openIndex === index}>{openIndex === index ? <FaMinus /> : <FaPlus />}</Icon>
            </AccordionHeader>
            <AccordionContent isOpen={openIndex === index}>{question.content}</AccordionContent>
          </Accordion>
        ))}
      </LeftSection>
      <RightSection>
        <Checklist>
          {checklistItems.map((item, index) => (
            <ChecklistItem key={index}>
              <FaCheck />
              {item}
            </ChecklistItem>
          ))}
        </Checklist>
        <ExperienceBox>
          <ExperienceYears>30</ExperienceYears>
          <ExperienceText>Years of Experience</ExperienceText>
        </ExperienceBox>
      </RightSection>
    </Container>
  </>
  );
};

export default QuestionAnswers;