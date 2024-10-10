import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const onClickLogout = () => {
    setIsAuth(false);
  };
  return (
    <div className="flex justify-between border border-[#dedede]">
      <div>
        <div className="h-14 ">
          <div className="bg-black rounded-md text-white min-h-8 max-h-11 min-w-20 max-w-40 mt-2 ml-16 p-2">
            Zakharew blog
          </div>
        </div>
      </div>
      <div>
        {isAuth ? (
          <>
            <button className="transition ease-in-out w-40 delay-50 bg-[#4662EF] p-2 m-2 rounded-md text-[#ffff] hover:-translate-y-1">
              Написать статью
            </button>
            <button
              onClick={onClickLogout}
              className="transition ease-in-out w-24 delay-50 bg-[#ef4646] p-2 m-2 rounded-md text-[#ffff] hover:-translate-y-1 "
            >
              Выйти
            </button>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
};
