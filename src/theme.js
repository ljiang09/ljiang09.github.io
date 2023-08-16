import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu, sans-serif",
  },
  palette: {
    primary: {
      main: "#e85a4f",
    },
    secondary: {
      main: "#e98074",
    },
    background: {
      tan: "#eae7dc",
      gray: "#f0f0f0",
    },
    text: {
      primary: "#8e8d8a",
      secondary: "#ffffff",
    },
  },
});

export default theme;
