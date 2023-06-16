import { styled } from "@mui/material";
import { height } from "@mui/system";

export const PeopleStyles = styled("section")(({ theme }) => ({
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

    "& .our-people": {
      p: {
        fontFamily: "Roboto",
        paddingTop: "40px",
        color: "#7A7A7A",
      },
    },

    "& .cta": {
      p: {
        fontFamily: "Roboto",
        color: "#7A7A7A",
      },
    },
  },

  "& .image-wrapper": {
    position: "relative",
    height: "248px",
    width: "218px",
  },

  "& .image": {
    objectFit: "cover",
  },

  "& .client-logos": {
    paddingTop: "150px",
    paddingBottom: "100px",
  },

  "& .logos": {
    margin: "0 auto",
  },

  "& .btn": {
    color: "white",
    backgroundColor: "#440dec",
    width: "100vw",
    fontWeight: "900",
    fontFamily: "Roboto",
    fontSize: "22px",
    padding: "22px 0px",
  },

  [theme.breakpoints.up("md")]: {
    "& .our-people": {
      p: {
        width: "80%",
        marginTop: "-40px",
      },
    },
    "& .clients": {
      h1: {
        fontSize: "16px",
        lineHeight: "65px",
      },
    },

    "& .btn": {
      height: "90%",
    },
  },

  [theme.breakpoints.up("lg")]: {
    "& .our-people": {
      p: {
        width: "65%",
      },
    },

    "& .btn": {
      height: "90%",
      width: "80%",
    },

    "& .image-wrapper": {
      position: "relative",
      height: "338px",
      width: "260px",
    },
  },
}));
