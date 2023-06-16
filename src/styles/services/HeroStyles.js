import { styled } from "@mui/material";
import { height } from "@mui/system";

export const HeroStyles = styled("section")(({ theme }) => ({
  h1: {
    position: "relative",
    zIndex: 1,
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "900",
    fontSize: "38px",
    lineHeight: "38px",
    marginBottom: "30px",
    width: "88%",
    textTransform: "uppercase",
  },

  h3: {
    paddingBottom: "50px",
    color: "white",
    fontFamily: "Roboto",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: 900,
    lineHeight: "18px",
    letterSpacing: "12px",
    zIndex: 1,
    position: "relative",
  },

  p: {
    color: "#707070",
    position: "relative",
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "24px",
    zIndex: 1,
    width: "90%",
  },

  "& .hero": {
    position: "absolute",
    top: "260px",
  },

  "& .image-wrapper": {
    position: "relative",
    height: "800px",
    top: -100,
    zIndex: "0",
    width: "100vw",
  },

  "& .image": {
    objectFit: "cover",
  },

  [theme.breakpoints.up("md")]: {
    h1: {
      fontSize: "60px",
      lineHeight: "61px",
    },
    p: {
      width: "33%",
    },
  },

  [theme.breakpoints.up("lg")]: {
    p: {
      width: "50%",
    },
  },

  [theme.breakpoints.up("xl")]: {
    p: {
      width: "33%",
    },
  },
}));
