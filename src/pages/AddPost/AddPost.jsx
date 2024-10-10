import { useCallback, useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import { Link } from "react-router-dom";

export const AddPost = () => {
  const imageUrl = "";
  const [value, setValue] = useState("");

  const handleChangeFile = () => {};

  const onClickRemoveImage = () => {};

  const onChange = useCallback((value) => {
    setValue(value);
  }, []);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  return (
    <Paper style={{ padding: 30 }}>
      <button className="transition ease-in-out delay-50 text-[#4662EF] p-2 w-40 border border-[#4662EF] rounded-md m-2 hover:border-[#364aae]  focus:bg-[#4662EF] focus:text-[#ffff] duration-200 ">
        Загрузить превью
      </button>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <button
          onClick={onClickRemoveImage}
          className="transition ease-in-out delay-50 text-[#ef4646] p-2 w-40 border border-[#ef4646] hover:border-[#a63737] rounded-md m-2  focus:bg-[#ef4646] focus:text-[#ffff] duration-200 "
        >
          Удалить
        </button>
      )}
      {imageUrl && (
        <img src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
      )}
      <br />
      <br />
      <TextField
        variant="standard"
        placeholder="Заголовок статьи..."
        fullWidth
      />
      <TextField variant="standard" placeholder="Тэги" fullWidth />
      <SimpleMDE value={value} onChange={onChange} options={options} />
      <div>
        <button className="transition ease-in-out w-40 delay-50 bg-[#4662EF] p-2 m-2 rounded-md text-[#ffff] hover:bg-[#4261fd] ">
          Опубликовать
        </button>

        <Link to="/">
          <button className="transition ease-in-out delay-50 text-[#4662EF] p-2 w-40 border border-[#4662EF] rounded-md m-2 hover:border-[#364aae]  focus:bg-[#4662EF] focus:text-[#ffff] duration-200 ">
            Отмена
          </button>
        </Link>
      </div>
    </Paper>
  );
};
