import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { theme } from "./layout";
import UserContextProvider from "./contexts/UserProvider";
import ResultProvider from "./contexts/ResultProvider";
import Router from "./router/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <ResultProvider>
            <Router />
          </ResultProvider>
        </UserContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
