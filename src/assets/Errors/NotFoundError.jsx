import { Link } from "react-router-dom";

export const NotFoundError = () => {
  return (
    <div>
      <Link to="/">
        <span to="/" className="text-2xl font-bold flex justify-center mt-2">
          Страница не найдена
        </span>
      </Link>
    </div>
  );
};
