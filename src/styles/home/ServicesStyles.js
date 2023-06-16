import { styled } from "@mui/material";
import { height } from "@mui/system";

export const ServicesStyles = styled("section")(({ theme }) => ({
  "& .services": {
    color: "white",
    paddingTop: "60px",
  },

  p: {
    fontFamily: "Roboto",
    color: "#7A7A7A",
  },

  "& .first-section": {
    writingMode: "vertical-rl",
    lineHeight: "24px",
    fontFamily: "Montserrat",
    fontSize: "16px",
    color: "white",
    visibility: "hidden",
  },

  "& .second-section": {
    paddingTop: "30px",
  },

  "& .services-list": {
    paddingTop: "75px",
    position: "relative",
  },

  "& .counter": {
    color: "#0F0F11",
    position: "absolute",
    fontFamily: "Roboto",
    fontSize: "60px",
    fontWeight: "900",
    top: 20,
    zIndex: 0,
  },

  "& .services-list h2": {
    fontFamily: "Roboto Slab",
    fontWeight: "800",
    fontSize: "19px",
    marginBottom: "30px",
    marginLeft: "30px",
    textTransform: "uppercase",
    zIndex: 2,
    position: "relative",
  },

  "& .services-list ul": {
    marginTop: "30px",
    fontSize: "14px",
    color: "#7A7A7A",
    lineHeight: "25px",
    textTransform: "capitalize",
  },

  "& ul li:before": {
    content: `">"`,
    position: "relative",
    paddingRight: 20,
  },

  "& .image-wrapper": {
    position: "relative",
    height: "530px",
    marginTop: "70px",
  },

  "& .image": {
    objectFit: "cover",
    position: "absolute",
    transform: "scale(1.08)",
  },

  [theme.breakpoints.up("md")]: {
    "& .services": {
      paddingTop: "60px",
    },

    "& .first-section": {
      visibility: "visible",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },

    "& .second-section": {
      paddingBottom: "0px",
    },

    "& .services-list": {
      position: "relative",
      paddingTop: "30px",
      paddingBottom: "50px",
    },

    "& .counter": {
      top: -15,
      fontSize: "54px",
    },

    "& .image-wrapper": {
      position: "relative",
      height: "380px",
      marginTop: "-40px",
    },
    "& .image": {
      transform: "scale(1)",
      marginLeft: "-24px",
    },
  },

  [theme.breakpoints.up("lg")]: {
    "& .services-list h2": {
      fontSize: "40px",
    },

    "& .image": {
      marginLeft: "-40px",
    },

    "& .services": {
      paddingTop: "160px",
    },

    "& .first-section": {
      fontSize: "30px",
      lineHeight: "40px",
      paddingTop: "60px",
      position: "relative",
      zIndex: 3,
    },

    "& .counter": {
      top: -25,
      fontSize: "75px",
    },

    "& .image-wrapper": {
      position: "relative",
      top: "-90px",
    },

    "& .upper": {
      top: "-150px",
    },

    "& .upper2": {
      top: "-185px",
    },
  },
}));