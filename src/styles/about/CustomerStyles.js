import { styled } from "@mui/material";
import { height } from "@mui/system";

export const CustomerStyles = styled("section")(({ theme }) => ({
  "& .clients": {
    paddingTop: "175px",

    h1: {
      fontFamily: "Roboto",
      fontWeight: "900",
      fontSize: "31px",
      lineHeight: "41px",
      color: "white",
      textTransform: "uppercase",
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
    paddingTop: "150px",
  },

  "& .logos": {
    margin: "0 auto",
  },

  [theme.breakpoints.up("md")]: {
    p: {
      width: "80%",
      marginTop: "-40px",
    },
    "& .clients": {
      h1: {
        fontSize: "16px",
        lineHeight: "65px",
      },
    },
  },

  [theme.breakpoints.up("lg")]: {
    p: {
      width: "65%",
    },
  },
}));
