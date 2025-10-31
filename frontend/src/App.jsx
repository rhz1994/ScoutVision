import Router from "./router/Router";
import "./App.css";
import UserContextProvider from "./contexts/UserProvider";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./layout";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
