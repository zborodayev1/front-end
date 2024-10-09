import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../../pages/Home/Home"
export const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Home />} path="/" />
      <Route element={<Home />} path="/" />
      <Route element={<Home />} path="/" />
      <Route element={<Home />} path="/" />
    </Routes>
  </BrowserRouter>
);
