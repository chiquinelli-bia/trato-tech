import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer />}>
          <Route index element={<div></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
