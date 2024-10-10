import { TextField } from "@mui/material";
import { Header } from "../../components/Header/Header";

export const Login = () => {
  return (
    <div>
      <Header />
      <div className=" bg-[#e6e6e6] h-screen flex flex-wrap justify-center">
        <div className="bg-[#ffff] px-16 mt-5 pt-8 w-96 h-2/3 rounded-sm">
          <div className="flex justify-center mt-5">
            <h1 className="text-xl font-bold mb-7">Войти</h1>
          </div>
          <div>
            <div className="flex justify-center mb-5">
              <TextField
                label="E-mail"
                error
                helperText="Неверно указана почта"
                fullWidth
              />
            </div>
            <div className="flex justify-center mb-5">
              <TextField label="Пароль" fullWidth />
            </div>
            <div className="flex justify-center">
              <button className="border p-2 w-96 transition ease-in-out delay-50 text-[#ffff] bg-[#4662EF] hover:border-[#4662EF] rounded-md m-2 duration-200">
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
