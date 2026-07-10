import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import PaginaPadrao from "./components/paginaPadrao";
import Home from "./pages/home";
import Categoria from "./pages/categorias";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
