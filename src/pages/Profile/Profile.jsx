// import { useDispatch, useSelector } from "react-redux";
// import { fetchAuthMe } from "../../components/redux/slices/auth";
// import { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { selectIsAuth } from "../../components/redux/slices/auth";
// import { UserInfo } from "../../components/UserInfo/UserInfo";


// export const Profile = () => {
//   const dispatch = useDispatch();
//   const isAuth = useSelector(selectIsAuth);
// //   const { data } = useSelector((state) => state.profiles);

//   useEffect(() => {
//     dispatch(fetchAuthMe());
//   }, [dispatch]);

//   if (!isAuth) {
//     return <Navigate to="/" />;
//   }


//   return (
//     <div>
//         <UserInfo additionalText={'345'} />
//     </div>
//   );
// };
