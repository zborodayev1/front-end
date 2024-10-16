import { Avatar } from "@mui/material";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsAuth } from "../redux/slices/auth";
import { persistor } from '../redux/store.js';


export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const onClickLogout = async () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      try {
        localStorage.removeItem('token');
        localStorage.removeItem('persist:root');
        await persistor.purge();
      } catch (error) {
        console.error(error);
      }
    }
  }
  const Auth = () => {
    if (!isAuth) {
      return null;
    }
    return (
      <div className="flex">
        <Link to="/add-post">
          <button className="transition ease-in-out w-40 delay-50 bg-[#4662EF] p-2 m-2 rounded-md text-[#ffff]">
            Написать статью
          </button>
        </Link>
        <button
          onClick={onClickLogout}
          className="transition ease-in-out w-24 delay-50 bg-[#ef4646] p-2 m-2 rounded-md text-[#ffff]"
        >
          Выйти
        </button>
        {isAuth && (
          <Link to="/profile" className="mt-2">
            <Avatar src={isAuth?.avatarUrl} />
          </Link>
        )}
      </div>
    );
  };  
  const notAuth = () => {
    return (
      <>
        <Link to="/login">
          <button className="transition ease-in-out delay-50 text-[#4662EF] phone:p-1 phone:m-1 phone-md:p-2 phone-md:m-1 laptop:mr-8 p-2 w-24 border border-[#4662EF] rounded-md m-2 focus:bg-[#4662EF] focus:text-[#ffff] duration-200 ">
            Войти
          </button>
        </Link>

        <Link to="/registration">
          <button className="transition ease-in-out delay-50 bg-[#4662EF] p-2 m-2 rounded-md text-[#ffff] focus:text-[#4662EF] focus:bg-[#ffff] duration-200 mr-16 phone:p-1 phone:m-1 phone-md:p-2 phone-md:m-1 laptop:mr-8">
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
          <Link to="/" className="">
            <button
              className="phone:p-1 phone:m-1 phone-md:p-2 phone-md:m-1 transition ease-out delay-150 mt-3 ml-16 bg-black p-2 rounded-md text-white focus:bg-[#4662EF] focus:text-[#ffff] focus:border-[#4662EF] duration-200"
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