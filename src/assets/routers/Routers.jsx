import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
import { Register } from "../../pages/Registration/Register";
import { AddPost } from "../../pages/AddPost/AddPost";
import { FullPost } from "../../pages/FullPost/FullPost";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../components/redux/slices/auth";
import { NotFoundError } from "../Errors/NotFoundError";
import { Header } from "../../components/Header/Header";
// import { Profile } from "../../pages/Profile/Profile";

export const Routers = () => {
  const isAuth = useSelector(selectIsAuth);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (dispatch) {
  //     dispatch(fetchAuthMe());
  //   }
  // }, [dispatch]);
  return (
    <>
      {
        <BrowserRouter>
        <Header />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route
              element={isAuth ? <Navigate to="/" /> : <Login />}
              path="/login"
            />
            <Route
              element={isAuth ? <Navigate to="/" /> : <Register />}
              path="/registration"
            />
            <Route
              element={isAuth ? <AddPost /> : <Navigate to="/" />}
              path="/add-post"
            />
            <Route element={<FullPost />} path="/posts/:id" />
            <Route element={<NotFoundError />} path="*" />
            {/* <Route element={<Profile />} path="/me" /> */}
          </Routes>
        </BrowserRouter>
      }
    </>
  );
};
