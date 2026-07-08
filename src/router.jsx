import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import PaginaPadrao from "./components/paginaPadrao";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<div></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
