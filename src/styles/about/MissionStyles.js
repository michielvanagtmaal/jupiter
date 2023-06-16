import { styled } from "@mui/material";
import { height } from "@mui/system";

export const MissionStyles = styled("section")(({ theme }) => ({
  h1: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "900",
    fontSize: "24px",
    lineHeight: "38px",
    marginBottom: "40px",
    textTransform: "uppercase",
    position: "relative",
  },

  p: {
    color: "#707070",
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "35px",
    position: "relative",
  },

  "& .padding": {
    paddingBottom: "90px",
  },

  "& .image-wrapper": {
    position: "relative",
    height: "625px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& .image": {
      objectFit: "cover",
    },
  },

  [theme.breakpoints.up("md")]: {
    "& .wrapper": {
      position: "relative",
      right: "-50px",
    },

    "& .image-wrapper": {
      position: "absolute",
      height: "600px",
      width: "500px",
      right: 0,
      marginTop: "70px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      "& .image": {
        objectFit: "contain",
      },
    },

    "& .top": {
      marginTop: "-20px",
    },
  },


  [theme.breakpoints.up("lg")]: {
    "& .top": {
      marginTop: "-20px",
    },

    "& .image-wrapper": {
      height: "700px",
      marginTop: "-40px",
    },
  },
}));
