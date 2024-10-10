import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
import { Register } from "../../pages/Registration/Register";
import { AddPost } from "../../pages/AddPost/AddPost";
import { FullPost } from "../../pages/FullPost/FullPost";
export const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/registration" />
      <Route element={<AddPost />} path="/post/create" />
      <Route element={<FullPost />} path="/post" />
    </Routes>
  </BrowserRouter>
);
