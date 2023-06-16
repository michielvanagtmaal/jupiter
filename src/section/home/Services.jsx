import Image from "next/image";
import { Grid, Container } from "@mui/material";
import { ServicesStyles } from "@/styles/home/ServicesStyles";
import img from "@/assets/images/camera.jpeg";

export const Services = () => {
  return (
    <ServicesStyles>
      <Container className="services">
        <Grid container spacing={4}>
          <Grid item xs={4} md={2} className="first-section" spacing={3}>
            <h2>
              CREATIVE & <br></br> CORPORATE VIDEO <br></br> PRODUCTION
            </h2>
          </Grid>
          <Grid item xs={8} md={5.5} className="second-section">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat ligula neque, nec sagittis ante blandit vitae. Aliquam
              iaculis ligula ultrices lorem cursus tincidunt.
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
          </Grid>
          <Grid item xs={12} md={4.5} className="services-list">
            <div className="counter">
              <h1>01</h1>
            </div>
            <h2>Strategy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>

            <ul>
              <li>Video strategy</li>
              <li>Content planning</li>
              <li>Campaign planning</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={7.5} order={{ xs: 7, md: 0 }}>
            <div className="image-wrapper">
              <Image className="image" src={img} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={12} md={4.5} className="services-list upper">
            <div className="counter">
              <h1>02</h1>
            </div>
            <h2>production</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>

            <ul>
              <li>Storytelling</li>
              <li>Creative ideas</li>
              <li>Animation</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={7.5}></Grid>
          <Grid item xs={12} md={4.5} className="services-list upper2">
            <div className="counter">
              <h1>03</h1>
            </div>
            <h2>marketing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>

            <ul>
              <li>Youtube Optimisation</li>
              <li>Facebook Optimisation</li>
              <li>Instagram Optimisation</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </ServicesStyles>
  );
}
