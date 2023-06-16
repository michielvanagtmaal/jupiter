import Image from "next/image";
import { Grid, Container } from "@mui/material";
import { IntroStyles } from "@/styles/home/IntroStyles";
import star from "@/assets/images/star-bg.png";

export const Intro = () => {
  return (
    <IntroStyles>
      <Container className="intro">
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <h1>
              CREATIVE & CORPORATE
              <span className="video"> VIDEO</span> <span>PRODUCTION</span>
            </h1>
          </Grid>
          <Grid item xs={9.5}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat ligula neque, nec sagittis ante blandit vitae. Aliquam
              iaculis ligula ultrices lorem cursus tincidunt.
            </p>
          </Grid>
        </Grid>
      </Container>
      <Grid container className="bg-image">
        <Grid item xs={12}>
          <div className="image-wrapper">
            <Image className="image" src={star} alt="" fill />
          </div>
        </Grid>
      </Grid>
    </IntroStyles>
  );
};
