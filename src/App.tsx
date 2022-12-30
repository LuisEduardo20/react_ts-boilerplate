import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/rsuite.min.css";

import { GlobalStyle } from "./styles/globalStyles";
import { AppProvider } from "./hooks";
import Theme from "./styles/theme";
import Loading from "./components/Loading";
import Routes from "./routes/routes";

//? O AppProvider é um provedor que engloba outros providers da pasta dos hooks
//? O ThemeProvider é um provedor que injeta as cores definidas no arquivo theme.ts em todos os components
//? O Loading é o componente de loading carregado para poder usar em toda a aplicação
//? O ToastContainer é o componente que permite usar o toast em toda aplicação

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={Theme}>
        <Loading />
        <GlobalStyle />
        <Routes />
        <ToastContainer theme="colored" />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
