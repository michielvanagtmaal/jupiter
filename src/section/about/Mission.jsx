import Image from "next/image";
import { Grid, Container } from "@mui/material";
import { MissionStyles } from "@/styles/about/MissionStyles";
import img from "@/assets/images/mission.jpeg";

export const Mission = () => {
  return (
    <MissionStyles>
      <Container>
        <Grid container className="mission" alignItems={"top"}>
          <Grid item className="article padding" sm={12} md={4} lg={5}>
            <h1>who are we</h1>
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
          </Grid>

          <Grid
            item
            className="article top"
            sm={12}
            md={4}
            lg={5}
            order={{ sm: 2, md: 3 }}
          >
            <h1>OUR MISSION & VISION</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            lg={7}
            order={{ sm: 3, md: 2 }}
            className="wrapper"
          >
            <div className="image-wrapper">
              <Image className="image" src={img} alt="" fill />
            </div>
          </Grid>
        </Grid>
      </Container>
    </MissionStyles>
  );
};
