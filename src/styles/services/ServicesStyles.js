import { styled } from "@mui/material";
import { height } from "@mui/system";

export const ServicesStyles = styled("section")(({ theme }) => ({
  h1: {
    position: "relative",
    zIndex: 1,
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "900",
    fontSize: "38px",
    lineHeight: "38px",
    marginBottom: "60px",
    width: "88%",
    textTransform: "uppercase",
    paddingTop: "35px",
  },

  p: {
    color: "#707070",
    position: "relative",
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "24px",
    zIndex: 1,
  },

  ul: {
    paddingTop: "40px",
    marginTop: "30px",
    fontSize: "18px",
    fontFamily: "Roboto",
    fontWeight: 400,
    color: "#7A7A7A",
    lineHeight: "45px",
    textTransform: "capitalize",
  },

  "ul li:before": {
    content: `">"`,
    position: "relative",
    paddingRight: 30,
  },

  "& .end": {

    paddingBottom: "130px",

  },

  "& .image-wrapper": {
    position: "relative",
    top: "30px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& .image": {
      objectFit: "contain",
    },
  },

  "& .section": {
    paddingTop: "170px",
  },

  [theme.breakpoints.up("lg")]: {
    "& .image-wrapper": {
      height: "400px",

      "& .image": {
        objectFit: "contain",
      },
    },
  },
}));
