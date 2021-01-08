import React, { useState } from "react";
import { Button } from "../ButtonElements";

import Video from "../../videos/Video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="Video.mp4" />
      </HeroBg>

      <HeroContent>
        <HeroH1>Partner Up</HeroH1>
        <HeroP>
          Find your Thesis Partner today and sign up to our platform
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
