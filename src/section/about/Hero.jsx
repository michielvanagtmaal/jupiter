import Image from "next/image";
import { Grid, Container } from "@mui/material";
import { HeroStyles } from "@/styles/about/HeroStyles";
import img from "@/assets/images/about-us-background.jpg"

export const Hero = () => {
  return (
    <HeroStyles>
      <Container>
        <div className="hero">
          <h3>about us</h3>
          <h1>we create videos that accomplish our client&#39;s goals.</h1>

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
