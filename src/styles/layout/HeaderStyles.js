import { styled } from "@mui/material";

export const HeaderStyles = styled("header")(({ theme }) => ({
  "& .header": {
    padding: "22px 0px",
    position: 'relative',
    zIndex: 1,
  },

  "& .img-wrapper": {
    position: "relative",
    height: 48,
    width: 50,
  },

  "& .menu-wrapper": {
    
  },

  [theme.breakpoints.up("md")]: {
    "& .img-wrapper": {
      position: "relative",
      height: 32,
      width: 34,
    },

    "& .menu-wrapper": {
      position: "relative",

      svg: {
        width: 30,
       

      },
    },
  },
}));
