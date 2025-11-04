import Router from "./router/Router";
import "./App.css";
import UserContextProvider from "./contexts/UserProvider";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./layout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ResultProvider from "./contexts/ResultProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <UserContextProvider>
            <ResultProvider>
              <Router />
            </ResultProvider>
          </UserContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
