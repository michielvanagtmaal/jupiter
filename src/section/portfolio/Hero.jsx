import Image from "next/image";
import { Grid, Container } from "@mui/material";
import { HeroStyles } from "@/styles/portfolio/HeroStyles";
import img from "@/assets/images/portfolios-bg.jpeg";

export const Hero = () => {
  return (
    <HeroStyles>
      <Container>
        <div className="hero">
          <h3>portfolios</h3>
          <h1>OUR PORTFOLIO</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
        </div>
      </Container>
      <div className="image-wrapper">
        <Image src={img} className="image" fill alt="" />
      </div>
    </HeroStyles>
  );
};
