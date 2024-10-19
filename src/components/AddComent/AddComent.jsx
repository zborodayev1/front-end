import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { selectIsAuth } from "../redux/slices/auth";
import { useSelector } from "react-redux";

export const AddComent = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <>
      <div className="p-2 flex">
        <Avatar src="https://mui.com/static/images/avatar/5.jpg" />
        <div className="ml-2 max-laptopL:w-[400px]">
          <TextField
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          {!isAuth ? (
            <div className="text-red-500 text-xs mt-2">
              {""}
              Войдите, чтобы оставлять комментарии
            </div>)
            : null}
          <button disabled={!isAuth} className="max-mobileL:mt-1 max-mobileL:h-8 max-mobileL:text-center max-mobileL:p-0 max-mobileL:text-sm max-mobileL:w-44 transition ease-in-out max-laptopL:w-48 text-center delay-50 bg-[#4662EF] hover:bg-[#4662f0] focus:bg-[#4772f0] p-2 mt-2 rounded-md text-[#ffff]">
            Написать комментарий
          </button>
        </div>
      </div>
    </>
  );
};
