import Image from "next/image";
import { Grid, Container } from "@mui/material";
import { HeroStyles } from "@/styles/services/HeroStyles";
import img from "@/assets/images/services-bg.jpeg";

export const Hero = () => {
  return (
    <HeroStyles>
      <Container>
        <div className="hero">
          <h3>SERVICES</h3>
          <h1>YOU NEED HELP WITH A VIDEO PROJECT?</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            volutpat ligula neque, nec sagittis ante blandit vitae. Aliquam
            iaculis ligula ultrices lorem cursus tincidunt.
          </p>
        </div>
      </Container>
      <div className="image-wrapper">
        <Image src={img} className="image" fill alt="" />
      </div>
    </HeroStyles>
  );
};
