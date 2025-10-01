import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Descricao from "./pages/descricao";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Descricao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
