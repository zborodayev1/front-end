import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectIsAuth } from "../redux/slices/auth";
import { persistor } from '../redux/store.js';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
      persistor.purge();
     
    }
  };
  const Auth = () => {
    return (
      <div className="flex">
        <Link to="/add-post">
          <button className="transition ease-in-out w-40 delay-50 bg-[#4662EF] p-2 m-2 rounded-md text-[#ffff] hover:-translate-y-1">
            Написать статью
          </button>
        </Link>
        <button
          onClick={onClickLogout}
          className="transition ease-in-out w-24 delay-50 bg-[#ef4646] p-2 m-2 rounded-md text-[#ffff] hover:-translate-y-1 "
        >
          Выйти
        </button>
        <Link to="/" className="mt-2">
          <Avatar src="" />
        </Link>
      </div>
    );
  };
  const notAuth = () => {
    return (
      <>
        <Link to="/login">
          <button className="transition ease-in-out delay-50 text-[#4662EF] p-2 w-24 border border-[#4662EF] rounded-md m-2 hover:-translate-y-1 focus:bg-[#4662EF] focus:text-[#ffff] duration-200 ">
            Войти
          </button>
        </Link>

        <Link to="/registration">
          <button className="transition ease-in-out delay-50 bg-[#4662EF] p-2 m-2 rounded-md text-[#ffff] hover:-translate-y-1 focus:text-[#4662EF] focus:bg-[#ffff] focus:border focus:border-[#4662EF] duration-200 mr-16">
            Создать аккаунт
          </button>
        </Link>
      </>
    );
  };
  return (
    <div className="flex justify-between border border-[#dedede]">
      <>
        <div className="h-14">
          <Link className="">
            <button
              className="transition ease-out delay-150 mt-3 ml-16 hover:-translate-y-1 bg-black p-2 rounded-md text-white focus:bg-[#4662EF] focus:text-[#ffff] duration-200"
              to="/"
            >
              Zakharew blog
            </button>
          </Link>
        </div>
      </>
      <div>{isAuth ? Auth() : notAuth()}</div>
    </div>
  );
};
