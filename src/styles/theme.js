import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({});

theme = createTheme({
  palette: {
    primary: {
      main: "#0f0f0f",
    },
    pink: {
      main: "#ffcfda",
    },
    yellow: {
      main: "#f9f3bb",
    },
    purple: {
      main: "#dbc7f9",
    },
    green: {
      main: "#d3e0d8",
    },
    grey: {
      main: "#333333",
    },
    white: {
      main: "#ffffff",
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {},
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: {
          top: 0,
          right: 0,
          position: "absolute",
          padding: "27px 24px",
        },
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: {
          top: 0,
          right: 0,
          position: "absolute",
          padding: "27px 24px",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          position: "relative",

          svg: {
            width: 35,
            fill: "#7A7A7A",
            transition: "all 0.3s",

            "&:hover": {
              cursor: "pointer",
              fill: "#fff",
            },
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#070707",
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1200px",
          },
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 700,
    },
    h2: {
      fontSize: 64,
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h3: {
      fontSize: 64,
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
  spacing: [4, 8, 16, 24, 48, 64, 128],
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
