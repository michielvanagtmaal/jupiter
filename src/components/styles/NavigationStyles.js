import { styled } from "@mui/material";

export const NavigationStyles = styled("header")(({ theme }) => ({
  "& .navigation": {
    color: "#7A7A7A",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "900",
    lineHeight: "10px",
    position: "absolute",
    paddingTop: "330px",
    left: "50%",
    transform: "translateX(-50%)",
    

    li: {
      padding: "25px 0px",
    },
  },

  "& a": {
    transition: "0.3s",
  },

  "& a:hover": {
    color: "white",
    cursor: "pointer",
  },

  [theme.breakpoints.up("lg")]: {
    "& .navigation": {
      color: "#7A7A7A",
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: "40px",
      fontWeight: "900",
      lineHeight: "61px",
      paddingTop: "150px",

      li: {
        padding: "25px 0px",
      },
    },
  },
}));
