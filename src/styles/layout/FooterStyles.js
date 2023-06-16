import { styled } from "@mui/material";

export const FooterStyles = styled("footer")(({ theme }) => ({
  "& .footer": {
    paddingTop: "100px",
  },

  "& .wrapper": {
    position: "relative",
  },

  "& .image-wrapper": {
    position: "relative",
    height: "400px",
    width: "100vw",

    span: {
      fontWeight: "500",
    },
  },

  "& .image": {
    objectFit: "cover",
  },

  "& .call-to-action": {
    margin: "0 auto",
    position: "relative",
    textAlign: "center",
    paddingTop: 130,
    zIndex: 2,

    h1: {
      color: "white",
      fontWeight: "900",
      fontSize: "32px",
      lineHeight: "34px",
      fontFamily: "Roboto",
    },
  },

  "& .cta-btn": {
    paddingTop: "90px",
    position: "absolute",
    marginLeft: "50%",
    transform: "translateX(-50%)",
  },

  "& .chevron:hover": {
    cursor: "pointer",

    "& .square": {
      fill: "white",
      transition: "all 0.3s",
    },
    "& .arrow": {
      stroke: "#440dec",
      transition: "all 0.3s",
    },
  },

  "& .footer-below": {
    color: "white",

    paddingTop: "170px",
    backgroundColor: "#0F0F11",
    width: "100%",
  },

  "& .logo-wrapper": {
    position: "relative",
    height: "58px",
    width: "58px",
    margin: "0 auto",
  },

  "& .logo": {
    objectFit: "cover",
  },

  "& .title": {
    fontFamily: "Roboto",
    color: "white",
    marginTop: "-10px",
    fontWeight: "900",
    textTransform: "uppercase",
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "center",
    paddingTop: "20px",
  },

  "& .social-icons": {
    gap: 30,
    paddingTop: 100,
    marginBottom: 105,
  },

  "& .navbar": {
    textTransform: "uppercase",
    color: "#7A7A7A",
    fontFamily: "Roboto",
    fontWeight: "900",
    fontSize: "13px",
    letterSpacing: 0.8,
    paddingBottom: "30px",
    paddingTop: "30px",
  },

  [theme.breakpoints.up("md")]: {
    "& .call-to-action": {
      textAlign: "left",
      paddingLeft: "30px",
      paddingTop: 470,

      h1: {
        fontSize: "40px",
        lineHeight: "42px",
      },
    },

    "& .title": {
      textAlign: "left",
      position: "relative",
    },

    "& .logo-wrapper": {
      height: "61px",
      width: "64px",
      margin: "0",
      right: "-50%",
    },

    "& .logo": {
      marginTop: "10px",
    },

    "& .cta-btn": {
      marginLeft: 0,
      transform: "translateX(0)",
      paddingTop: "100px",
    },

    "& .image-wrapper": {
      height: "780px",
    },

    "& .image": {
      objectFit: "cover",
    },

    "& .navbar": {
      height: "100%",
      margin: "150px 0 0 0",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },

  [theme.breakpoints.up("lg")]: {
    "& .call-to-action": {
      paddingLeft: 165,
    },

    "& .navbar": {
      paddingLeft: "40px",
      paddingRight: "40px",
    },
  },

  [theme.breakpoints.up("xl")]: {
    "& .call-to-action": {
      paddingLeft: 300,
    },
    "& .title": {
      left: -10,
    },

    "& .social-icons": {
      marginLeft: -70,
    },

    "& .padding": {
      width: 1500,
    },
    "& .navbar": {
      paddingLeft: "100px",
      paddingRight: "100px",
    },
  },
}));
