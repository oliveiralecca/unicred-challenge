import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { MembersProvider } from "./contexts/MembersContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MembersProvider>
          <Router />
        </MembersProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
