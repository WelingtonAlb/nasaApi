import { ThemeProvider } from "styled-components";

import { Layout } from "./components/templates/Layout";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/globalstyle";
import dark from "./styles/themes/dark";

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}
