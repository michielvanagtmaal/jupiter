import { styled } from "@mui/material";
import { height } from "@mui/system";

export const IntroStyles = styled("section")(({ theme }) => ({
  h1: {
    position: "relative",
    zIndex: 1,
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "900",
    fontSize: "28px",
    lineHeight: "29px",
    marginBottom: "30px",
    width: "88%",

    span: {
      color: "#707070",
    },
  },

  "& .video": {
    fontFamily: "Roboto Slab",
  },

  "& .intro": {
    paddingTop: "140px",
  },

  p: {
    color: "#707070",
    position: "relative",
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "24px",
    zIndex: 1,
  },

  "& .bg-image": {
    position: "absolute",
    top: 120,
  },

  "& .image-wrapper": {
    position: "relative",
    height: "371px",
    width: "390px",
  },

  "& .image": {
    objectFit: "cover",
  },

  [theme.breakpoints.up("md")]: {
    h1: {
      fontSize: "58px",
      lineHeight: "59px",
      width: "710px",
    },

    "& .image-wrapper": {
      height: "580px",
      width: "610px",
    },
  },

  [theme.breakpoints.up("lg")]: {
    p: {
      maxWidth: "90%",
    },

    "& .image-wrapper": {
      height: "810px",
      width: "852px",
    },

    "& .bg-image": {
      position: "absolute",
      right: -530,
    },
  },

  [theme.breakpoints.up("xl")]: {
    p: {
      maxWidth: "70%",
    },

    "& .image-wrapper": {
      height: "960px",
      width: "1010px",
    },

    "& .bg-image": {
      position: "absolute",
      right: -470,
      top: 140,
    },
  },

  [theme.breakpoints.up("xxl")]: {
    "& .image-wrapper": {
      height: "1600px",
      width: "1684px",
    },

    "& .bg-image": {
      position: "absolute",
      right: -600,
      top: 120,
    },
  },
}));
