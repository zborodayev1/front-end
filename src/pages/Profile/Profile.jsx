import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../../components/redux/slices/profiles";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../components/redux/slices/auth";


export const Profile = () => {
  const dispath = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispath(fetchMe());
  }, [dispath]);

  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
        <h1>Profile</h1>
    </div>
  )
}
