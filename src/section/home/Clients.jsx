import Image from "next/image";
import { Grid, Container } from "@mui/material";
import { ClientsStyles } from "@/styles/home/ClientsStyles";
import logo from "@/assets/images/people-care.png";
import logo2 from "@/assets/images/strong.png";
import logo3 from "@/assets/images/swiss-made.png";
import logo4 from "@/assets/images/technology-systems.png";
import logo5 from "@/assets/images/venice-beach.png";
import logo6 from "@/assets/images/cloud-mining.png";
import logo7 from "@/assets/images/delivery.png";
import logo8 from "@/assets/images/pariatur.png";


export const Clients = () => {
  return (
    <ClientsStyles>
      <Container className="clients">
        <div>
          <h1>WE CREATE VIDEOS THAT ACCOMPLISH OUR CLIENT’S GOALS.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
        </div>

        <Grid container className="client-logos">
          <Grid item xs={4} lg={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={4} lg={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo2} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={4} lg={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo3} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={4} lg={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo4} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={4} lg={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo5} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={4} lg={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo6} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={4} lg={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo7} fill alt="" />
            </div>
          </Grid>

          <Grid item sm={4} lg={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo8} fill alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </ClientsStyles>
  );
};
