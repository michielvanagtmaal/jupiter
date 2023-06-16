import { styled } from "@mui/material";
import { height } from "@mui/system";

export const AlbumStyles = styled("section")(({ theme }) => ({
  "& .album": {
    paddingTop: "160px",
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

  "& .short": {
    position: "relative",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& .image": {
      objectFit: "cover",
    },
  },
  [theme.breakpoints.up("md")]: {
    "& .second": {
      position: "absolute",
      paddingTop: "100px",
    },

    "& .image-wrapper": {
      position: "relative",
      height: "320px",
      width: "240px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    "& .short": {
      position: "relative",
      height: "220px",
      width: "380px",
      display: "flex",
    },

    "& .one": {
      marginLeft: "120px",
      zIndex: 2,
    },

    "& .two": {
      marginLeft: "120px",
      zIndex: 0,
    },

    "& .three": {
      marginLeft: "-120px",
      zIndex: 1,
    },
  },
}));
