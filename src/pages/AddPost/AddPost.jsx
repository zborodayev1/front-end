/* eslint-disable no-unused-vars */
import { useCallback, useMemo, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { selectIsAuth } from "../../components/redux/slices/auth";
import { useSelector } from "react-redux";
import axios from "../../axios";

export const AddPost = () => {

  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const inputFileRef = useRef(null);

  const handleChangeFile = async (event) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImage(data.url);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при загрузке файла!");
    }
  };

  const onClickRemoveImage = () => {
    if (window.confirm("Вы действительно хотите удалить изображение?")) {
      setImage("");
    }
  };

  const onChange = useCallback((value) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const fields = {
        text,
        title,
        tags,
        image,
      };

      const { data } = await axios.post("/posts", fields);
      const _id = data._id;

      navigate(`/posts/${_id}`);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при создании статьи!");
    }
  };

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

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="flex justify-center"> 
      <div className="mt-2 ml-2 p-2 bg-white max-laptopL:w-[600px]">
        <div>
        <button
          onClick={() => inputFileRef.current.click()}
          className="transition ease-in-out delay-50 text-[#4662EF] p-2 w-40 border border-[#4662EF] rounded-md m-2 hover:border-[#364aae]  focus:bg-[#4662EF] focus:text-[#ffff] duration-200 "
        >
          Загрузить превью
        </button>
        <input
          ref={inputFileRef}
          type="file"
          onChange={handleChangeFile}
          hidden
        />
        {image && (
          <>
            <button
              onClick={onClickRemoveImage}
              className="transition ease-in-out delay-50 text-[#ef4646] p-2 w-40 border border-[#ef4646] hover:border-[#a63737] rounded-md m-2  focus:bg-[#ef4646] focus:text-[#ffff] duration-200 "
            >
              Удалить
            </button>
            <img src={`http://localhost:4444${image}`} alt="Uploaded" />
          </>
        )}

        <br />
        <br />
        <TextField
          variant="standard"
          placeholder="Заголовок статьи..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        {!title ?(
          <div className="text-red-500 text-sm ml-2">Заголовок обязателен!</div>
        ):(
          <div></div>
        )}
        <TextField
          variant="standard"
          placeholder="Тэги"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          fullWidth
        />
        {!tags ?(
          <div className="text-red-500 text-sm ml-2">Тэги обязательны!</div>
        ):(
          <div></div>
        )}
        <br />
        <br />
          <SimpleMDE value={text} onChange={onChange} options={options} />
        {!text ?(
          <div className="text-red-500 text-sm ml-2">Текст обязательны!</div>
        ):(
          <div></div>
        )}
        <div>
          <button
            disabled={!text || !title}
            onClick={onSubmit}
            className="transition ease-in-out w-40 delay-50 bg-[#4662EF] p-2 m-2 rounded-md text-[#ffff] hover:bg-[#4261fd] "
          >
            Опубликовать
          </button>

          <Link to="/">
            <button className="transition ease-in-out delay-50 text-[#4662EF] p-2 w-40 border border-[#4662EF] rounded-md m-2 hover:border-[#364aae]  focus:bg-[#4662EF] focus:text-[#ffff] duration-200 ">
              Отмена
            </button>
          </Link>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};
