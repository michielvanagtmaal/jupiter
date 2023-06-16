import { styled } from "@mui/material";
import { height } from "@mui/system";

export const ClientsStyles = styled("section")(({ theme }) => ({
  "& .clients": {

    paddingTop: "165px",

    h1: {
      fontFamily: "Roboto",
      fontWeight: "900",
      fontSize: "42px",
      lineHeight: "41px",
      color: "white",
    },

    p: {
      fontFamily: "Roboto",
      paddingTop: "40px",
      color: "#7A7A7A",
    },
  },

  "& .image-wrapper": {
    position: "relative",
    height: "148px",
    width: "148px",
  },

  "& .image": {
    objectFit: "contain",
  },

  "& .client-logos": {
    paddingTop: "60px",
  },

  "& .logos": {
    margin: "0 auto",
  },

  [theme.breakpoints.up("md")]: {
    p: {
      width: "70%",
    },
  },

  [theme.breakpoints.up("lg")]: {
    p: {
      width: "100%",
    },
    "& .clients": {
      h1: {
        fontSize: "65px",
        lineHeight: "65px",
      },
    },

    "& .client-logos": {
      paddingTop: "70px",
    },
  },
}));
