import { createTheme } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0477CE",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
    secondary: {
      main: "#fff",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
    contrast: {
      main: "#ffce2e",
      light: "#ffdc6b",
      dark: "#8b7f0f",
      contrastText: "#242105",
    },
  },
});
