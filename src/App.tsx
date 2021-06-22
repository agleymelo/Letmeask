import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/Auth";

import { Routes } from "./routes";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
