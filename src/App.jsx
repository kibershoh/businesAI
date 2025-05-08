import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import ExperienceSection from "./components/experience";
import MarketCase from "./components/marketCase";
import Mission from "./components/missionIs";
import QuestionAnswers from "./components/questionAnswers";
import Testimonials from "./components/testimonials";
import Consulting from "./components/consulting";
import StatsComponent from "./components/status";
import Footer from "./components/footer";
import Header from "./components/header";
import styled from "styled-components";
const AppContainer = styled.div`
  padding: 0 30px;
`;
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <Header />
      <ExperienceSection />
      <br />
      <br />
      <MarketCase />
      <br />
      <br />
      <Mission />
      <QuestionAnswers />
      <Testimonials />
      <StatsComponent />
      <Consulting />
      <br />
      <Footer />
    </>
  );
}

export default App;
