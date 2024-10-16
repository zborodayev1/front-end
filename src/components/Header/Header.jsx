import { Avatar } from "@mui/material";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsAuth } from "../redux/slices/auth";
import { persistor } from '../redux/store.js';


export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const onClickLogout = async () => {
      try {
        localStorage.removeItem('token');
        localStorage.removeItem('persist:root');
        await persistor.purge();
      } catch (error) {
        console.error(error);
      }
    }
  const Auth = () => {
    if (!isAuth) {
      return null;
    }
    return (
      <div className="flex">
        <Link to="/add-post">
          <button className="max-mobileL:mt-3 max-mobileL:h-8 max-mobileL:text-center max-mobileL:p-0 max-mobileL:text-sm max-mobileL:w-32 transition ease-in-out w-40 delay-50 bg-[#4662EF] p-2 m-2 rounded-md text-[#ffff]">
            Написать статью
          </button>
        </Link>
        <button
          onClick={onClickLogout}
          className="max-mobileL:mt-3 max-mobileL:h-8 max-mobileL:text-center max-mobileL:p-0 max-mobileL:text-sm max-mobileL:ml-0 max-mobileL:w-16 transition ease-in-out w-24 delay-50 bg-[#ef4646] p-2 m-2 rounded-md text-[#ffff]"
        >
          Выйти
        </button>

          <Link to="/profile" className="mt-2">
            <Avatar />
          </Link>

      </div>
    );
  };  
  const notAuth = () => {
    return (
      <>
        <Link to="/login">
          <button className="max-mobileL:mt-3 max-mobileL:h-8 max-mobileL:text-center max-mobileL:p-0 max-mobileL:text-sm transition ease-in-out delay-50 text-[#4662EF] p-2 w-24 border border-[#4662EF] rounded-md m-2 focus:bg-[#4662EF] focus:text-[#ffff] duration-200 ">
            Войти
          </button>
        </Link>

        <Link to="/registration">
          <button className="max-mobileL:h-8 max-mobileL:text-center max-mobileL:p-0 max-mobileL:text-sm transition ease-in-out delay-50 bg-[#4662EF] p-2 m-2 rounded-md text-[#ffff] focus:text-[#4662EF] focus:bg-[#ffff] duration-200 mr-16">
            Создать аккаунт
          </button>
        </Link>
      </>
    );
  };
  return (
    <div>
    <div className="flex justify-between">
      <>
        <div className="h-14">
          <Link to="/" className="">
            <button
              className="max-mobileL:ml-2 max-mobileL:h-8 max-mobileL:text-center max-mobileL:p-0 max-mobileL:text-sm max-mobileL:w-28 transition ease-out delay-150 mt-3 ml-16 bg-black p-2 rounded-md text-white focus:bg-[#4662EF] focus:text-[#ffff] focus:border-[#4662EF] duration-200"
            >
              Zakharew blog
            </button>
          </Link>
        </div>
      </>
      <div>{isAuth ? Auth() : notAuth()}</div>
    </div>
      <div className='border border-[#dedede] h-0 mr-2 ml-2'></div>
    </div>
  );
};