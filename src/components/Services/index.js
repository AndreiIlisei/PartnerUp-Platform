import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-5.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>How it works</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src="https://image.freepik.com/free-vector/man-with-laptop-studying-working-concept_113065-167.jpg" />
          <ServicesH2> Find the perfect match.</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="https://image.freepik.com/free-vector/girl-writing-journal-diary_74855-7408.jpg" />
          <ServicesH2>Based on Preference & Interest</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="https://image.freepik.com/free-vector/flat-university-concept-background_23-2148191433.jpg" />
          <ServicesH2>Excell at your Thesis!</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
