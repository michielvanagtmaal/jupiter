import React from "react";
import { Grid, Container } from "@mui/material";
import { FooterStyles } from "@/styles/layout/FooterStyles";
import Image from "next/image";
import img from "@/assets/images/footer-background.png";
import logo from "@/assets/images/Logo-small.webp";
import { Chevron } from "@/assets/icons/Chevron";
import { Facebook } from "@/assets/icons/Facebook";
import { Instagram } from "@/assets/icons/Instagram";
import { Twitter } from "@/assets/icons/Twitter";
import { Youtube } from "@/assets/icons/Youtube";


export const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer">
        <Grid container justifyContent={"center"}>
          <Grid item className="wrapper">
            <div className="image-wrapper">
              <Image className="image" src={img} alt="" fill />

              <div className="call-to-action">
                <h1>
                  IF YOU WANT TO CREATE YOUR <br></br> PROJECTS TO
                  PROFESSIONALS, <br></br> GET A QUOTE
                </h1>

                <div className="cta-btn">
                  <div className="chevron">
                  <Chevron />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container className="whole-footer" md={12}>
          <Grid container className="footer-below" xs={12} md={6}>
            <Grid container item md={1} lg={2} xl={1.5}>
              <div className="padding"></div>
            </Grid>
            <Grid container item xs={12} md={2} lg={1.5} xl={2.5}>
              <div className="logo-wrapper">
                <Image className="logo" src={logo} fill alt="" />
              </div>
            </Grid>

            <Grid
              container
              item
              xs={12}
              md={9}
              lg={8.5}
              xl={5}
              className="title"
              justifyContent={"center"}
            >
              <h3>
                JupiterX creative & <br></br> CORPORATE video <br></br>{" "}
                production
              </h3>
            </Grid>
            <Grid container item xl={3}>
              <div className="padding-right"></div>
            </Grid>

            <Grid container item md={2}></Grid>

            <Grid
              container
              item
              xs={12}
              md={10}
              className="social-icons"
              justifyContent={"center"}
            >
              <Facebook />
              <Instagram />
              <Twitter />
              <Youtube />
            </Grid>
          </Grid>

          <Grid container className="navbar" md={6}>
            <Grid
              container
              item
              xs={6}
              md={6}
              lg={3}
              className="navigation"
              justifyContent={"center"}
            >
              <h4>about us</h4>
            </Grid>

            <Grid
              container
              item
              xs={6}
              md={6}
              lg={3}
              className="navigation"
              justifyContent={"center"}
            >
              <h4>OUR Works</h4>
            </Grid>

            <Grid
              container
              item
              xs={6}
              md={6}
              lg={3}
              className="navigation"
              justifyContent={"center"}
            >
              <h4>services</h4>
            </Grid>

            <Grid
              container
              item
              xs={6}
              md={6}
              lg={3}
              className="navigation"
              justifyContent={"center"}
            >
              <h4>contact us</h4>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </FooterStyles>
  );
};
