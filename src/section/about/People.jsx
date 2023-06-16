import Image from "next/image";
import { Grid, Container } from "@mui/material";
import { PeopleStyles } from "@/styles/about/PeopleStyles";
import logo from "@/assets/images/team-member-1.jpeg";
import logo2 from "@/assets/images/team-member-2.jpeg";
import logo3 from "@/assets/images/team-member-3.jpeg";
import logo4 from "@/assets/images/team-member-4.jpeg";
import logo5 from "@/assets/images/team-member-5.jpeg";
import logo6 from "@/assets/images/team-member-6.jpeg";
import logo7 from "@/assets/images/team-member-7.jpeg";
import logo8 from "@/assets/images/team-member-8.jpeg";
import Button from "@mui/material/Button";

export const People = () => {
  return (
    <PeopleStyles>
      <Container className="clients">
        <div className="our-people">
          <h1>OUR PEOPLE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
        </div>

        <Grid container className="client-logos" spacing={3}>
          <Grid item xs={6} md={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo2} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo3} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo4} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo5} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo6} fill alt="" />
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo7} fill alt="" />
            </div>
          </Grid>

          <Grid item sm={6} md={3}>
            <div className="image-wrapper logos">
              <Image className="image" src={logo8} fill alt="" />
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={4} className="cta" alignItems={"top"}>
          <Grid container item xs={12} md={8}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
          </Grid>

          <Grid container item xs={12} md={4} justifyContent={"right"}>
            <Button className="btn">Career</Button>
          </Grid>
        </Grid>
      </Container>
    </PeopleStyles>
  );
};
