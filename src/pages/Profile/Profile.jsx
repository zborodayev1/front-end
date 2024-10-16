// import { useDispatch, useSelector } from "react-redux";
// import { fetchProfile } from "../../components/redux/slices/profiles";
// import { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { selectIsAuth } from "../../components/redux/slices/auth";
// import { Avatar } from "@mui/material";


// export const Profile = ({ user }) => {
//   const dispatch = useDispatch();
//   const isAuth = useSelector(selectIsAuth);
//   const { data, status } = useSelector((state) => state.profiles);

//   useEffect(() => {
//     dispatch(fetchProfile());
//   }, [dispatch]);

//   if (!isAuth) {
//     return <Navigate to="/" />;
//   }

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "error") {
//     return <div>Error</div>;
//   }

//   if (!data) {
//     return <div>User not found</div>;
//   }

//   return (
//     <div>
//       <Avatar src={user.avatarUrl} />
//       <div>
//         <h1>{user.fullName}</h1>
//       </div>
//     </div>
//   );
// };
