import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Descricao from "./pages/descricao";
import Layout from "./layout/Layout";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Descricao />} />
          </Route>
        </Routes>
      </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;
