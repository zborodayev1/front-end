import { Avatar, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  fetchRegister,
  selectIsAuth,
} from "../../components/redux/slices/auth";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const [err, setErr] = useState(null);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = async (values) => {
    try {
      const data = await dispatch(fetchRegister(values));

      if (!data.payload) {
        return setErr("Не удалось создать аккаунт!");
      }

      if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
    } catch (error) {
      console.error(error);
      setErr("Ошибка сервера!");
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className=" bg-[#e6e6e6] h-screen flex flex-wrap justify-center">
        <div className="bg-[#ffff] px-16 mt-5 pt-8 w-96 h-140 phone:max-w-90 phone-md:max-w-96 rounded-sm">
          <div className="flex justify-center mt-5">
            <h1 className="text-xl font-bold">Создание аккаунта</h1>
          </div>
          <div className="flex justify-center mt-3 mb-3">
            <Avatar sx={{ width: 70, height: 70 }} src="/broken-image.jpg" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center mb-5">
              <TextField
                label="Полное имя"
                fullWidth
                error={Boolean(errors.fullName?.message)}
                helperText={errors.fullName?.message}
                type="text"
                {...register("fullName", {
                  required: "Полное имя обязательно",
                })}
              />
            </div>
            <div className="flex justify-center mb-5">
              <TextField
                label="E-mail"
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
                type="email"
                {...register("email", { required: "Почта обязательна" })}
                fullWidth
              />
            </div>
            <div className="flex justify-center mb-5">
              <TextField
                label="Пароль"
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
                {...register("password", { required: "Пароль обязателен" })}
                fullWidth
              />
            </div>
            <div className="flex justify-center">
              <button
                disabled={!isValid}
                type="submit"
                className="border p-2 w-96 transition ease-in-out delay-50 text-[#ffff] bg-[#4662EF] hover:border-[#4662EF] rounded-md m-2 duration-200"
              >
                Создать аккаунт
              </button>
            </div>
          </form>
          <h1 className="text-[#D3312F] mt-2 text-sm ml-3">{err}</h1>
        </div>
      </div>
    </div>
  );
};
