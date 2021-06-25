import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { ThemeContextProvider } from "./context/ThemeContext";
import { AuthContextProvider } from "./context/Auth";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        <GlobalStyle />
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
