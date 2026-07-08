import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import PaginaPadrao from "./components/paginaPadrao";
import Home from "./pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
