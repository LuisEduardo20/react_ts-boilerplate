import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/rsuite.min.css";

import { GlobalStyle } from "./styles/globalStyles";
import { AppProvider } from "./hooks";
import Theme from "./styles/theme";
import Loading from "./components/Loading";
import RoutesComponent from "@/routes/routes.component";

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={Theme}>
        <Loading />
        <GlobalStyle />
        <RoutesComponent />
        <ToastContainer theme="colored" />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
