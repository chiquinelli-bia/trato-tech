import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div></div>}>
          <Route index element={<div></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
