import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import PaginaPadrao from "./components/paginaPadrao";
import Home from "./pages/home";
import Categoria from "./pages/categorias";
import Carrinho from "./pages/carrinho";
import Anuncie from "./pages/anuncie";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/anuncie" element={<Anuncie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
