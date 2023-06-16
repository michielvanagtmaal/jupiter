import { styled } from "@mui/material";
import { height } from "@mui/system";

export const GalleryStyles = styled("section")(({ theme }) => ({
  "& .gallery": {
    paddingTop: "120px",
  },

  "& .image-wrapper": {
    position: "relative",
    height: "430px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    span: {
      fontWeight: "500",
    },
  },
  "& .long": {
    height: "600px",
  },

  "& .image-wrapper-flex": {
    position: "relative",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    span: {
      fontWeight: "500",
    },
  },

  p: {
    color: "white",
    position: "relative",
    fontWeight: "bold",
    fontSize: "15px",
    textAlign: "center",
    lineHeight: "50px",
    fontFamily: 'Roboto',
  },

  "& .image": {
    objectFit: "cover",
  },

  [theme.breakpoints.up("md")]: {
    "& .image-wrapper": {
      height: "450px",
    },

    "& .gallery": {
      paddingTop: 90,
    },

    "& .image-wrapper-flex": {
      height: "300px",
    },

    "& .long": {
      height: "625px",
    },
  },

  [theme.breakpoints.up("lg")]: {
    "& .image-wrapper": {
      height: "600px",
    },

    "& .image-wrapper-flex": {
      height: "320px",
    },

    "& .long": {
      height: "665px",
    },
  },
}));
