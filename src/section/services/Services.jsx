import Image from "next/image";
import { Grid, Container } from "@mui/material";
import { ServicesStyles } from "@/styles/services/ServicesStyles";
import img from "@/assets/images/strategy.jpeg";
import img2 from "@/assets/images/production.jpeg";
import img3 from "@/assets/images/marketing.jpeg";

export const Services = () => {
  return (
    <ServicesStyles>
      <Container>
        <Grid container spacing={5} alignItems={"end"}>
          <Grid item md={6}>
            <h1>Strategy</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat ligula neque, nec sagittis ante blandit vitae. Aliquam
              iaculis ligula ultrices lorem cursus tincidunt. <br></br>{" "}
              <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <ul>
              <li>Video Strategy</li>
              <li>Content Planning</li>
              <li>Campaign Planning</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6} className="wrapper">
            <div className="image-wrapper">
              <Image className="image" src={img} alt="" fill />
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems={"end"} className="section">
          <Grid item xs={12} md={6} className="wrapper">
            <div className="image-wrapper">
              <Image className="image" src={img2} alt="" fill />
            </div>
          </Grid>
          <Grid item md={6}>
            <h1>PRODUCTION</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat ligula neque, nec sagittis ante blandit vitae. Aliquam
              iaculis ligula ultrices lorem cursus tincidunt. <br></br>{" "}
              <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <ul>
              <li>Storytelling</li>
              <li>Creative Ideas</li>
              <li>Animation</li>
            </ul>
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems={"end"} className="section end">
          <Grid item md={6}>
            <h1>MARKETING</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat ligula neque, nec sagittis ante blandit vitae. Aliquam
              iaculis ligula ultrices lorem cursus tincidunt. <br></br>{" "}
              <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <ul>
              <li>Youtube Optimisation</li>
              <li>Facebook Optimisation</li>
              <li>Instagram Optimisation</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6} className="wrapper">
            <div className="image-wrapper">
              <Image className="image" src={img3} alt="" fill />
            </div>
          </Grid>
        </Grid>
      </Container>
    </ServicesStyles>
  );
};
