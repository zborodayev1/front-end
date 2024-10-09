
export const Header = () => {
    const isAuth = false;
    const onClickLogout = (isAuth) => {
        isAuth
    };
    return (
        <div className="flex justify-between border border-[#dedede]">
            <div>
                <div className="h-14 "> 
                    <button className="bg-black rounded-md text-white min-h-8 max-h-11 min-w-20 max-w-40 mt-2 ml-16 p-2 hover:-translate-y-1 focus:bg-[#4361ee] duration-150">1234567890 blog</button>
                </div>
            </div>
            <div className="mr-16">
            {isAuth ? (
              <>
                <button className="text-[#4662EF] p-2 w-24 border border-[#4662EF] rounded-md m-2 hover:-translate-y-1 duration-150 focus:bg-[#4662EF]]">Написать статью</button> 

                <button onClick={onClickLogout} className="text-[#4662EF] p-2 w-24 border border-[#4662EF] rounded-md m-2 hover:-translate-y-1 duration-150 focus:bg-[#4662EF]]" >
                  Выйти
                </button >
              </>
            ) : (
              <>
               
                  <button className="transition ease-in-out delay-50 text-[#4662EF] p-2 w-24 border border-[#4662EF] rounded-md m-2 hover:-translate-y-1 focus:bg-[#4662EF] focus:text-[#ffff] duration-200">Войти</button> 

                  <button className="transition ease-in-out delay-50 bg-[#4662EF] p-2 m-2 rounded-md text-[#ffff] hover:-translate-y-1 focus:text-[#4662EF] focus:bg-[#ffff] focus:border focus:border-[#4662EF] duration-200">Создать аккаунт</button>
              </>
            )}
            </div>
        </div>
    )
}
