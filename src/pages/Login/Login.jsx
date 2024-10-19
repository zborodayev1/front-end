import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, selectIsAuth } from "../../components/redux/slices/auth";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [err, setErr] = useState(null);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = async (values) => {
    try {
      const data = await dispatch(fetchLogin(values));

      if (!data.payload) {
        return setErr("Не удалось войти!");
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
      <div className="bg-[#e6e6e6] h-screen flex flex-wrap justify-center">
        <div className="bg-[#ffff] px-16 mt-5 pt-8 w-96 h-124 rounded-sm">
          <div className="flex justify-center mt-5">
            <h1 className="text-xl font-bold mb-7">Войти</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                Войти
              </button>
            </div>
          </form>
          <h1 className="text-[#D3312F] mt-2 text-sm ml-3">{err}</h1>
        </div>
      </div>
    </div>
  );
};
