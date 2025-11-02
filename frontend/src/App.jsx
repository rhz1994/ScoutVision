import Router from "./router/Router";
import "./App.css";
import UserContextProvider from "./contexts/UserProvider";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./layout";
import { QueryQlient, QueryClientProvider } from "@tanstack/react-query";

const queryQlient = new QueryQlient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryQlient}>
        <ThemeProvider theme={theme}>
          <UserContextProvider>
            <Router />
          </UserContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
