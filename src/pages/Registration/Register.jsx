import { Avatar, TextField } from "@mui/material";
import { Header } from "../../components/Header/Header";

export const Register = () => {
  return (
    <div>
      <Header />
      <div className=" bg-[#e6e6e6] h-screen flex flex-wrap justify-center">
        <div className="bg-[#ffff] px-16 mt-5 pt-8 w-96 h-2/3 rounded-sm">
          <div className="flex justify-center mt-5">
            <h1 className="text-xl font-bold">Создание аккаунта</h1>
          </div>
          <div className="flex justify-center mt-3 mb-3">
            <Avatar sx={{ width: 70, height: 70 }} src="/broken-image.jpg" />
          </div>
          <div>
            <div className="flex justify-center mb-5">
              <TextField label="Полное имя" fullWidth />
            </div>
            <div className="flex justify-center mb-5">
              <TextField label="E-mail" fullWidth />
            </div>
            <div className="flex justify-center mb-5">
              <TextField label="Пароль" fullWidth />
            </div>

            <div className="flex justify-center">
              <button className="border p-2 w-96 transition ease-in-out delay-50 text-[#ffff] bg-[#4662EF] hover:border-[#4662EF] rounded-md m-2 duration-200">
                Создать аккаунт
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
