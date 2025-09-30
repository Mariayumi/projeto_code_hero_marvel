import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Descricao from "./pages/descricao/Descricao";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:uuid" element={<Descricao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
