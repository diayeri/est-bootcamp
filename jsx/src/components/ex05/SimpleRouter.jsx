import React from "react";
import Loading from "../Loading";

const AdminPage = () => {
  return <div>admin 입니다</div>;
};
const UserPage = () => {
  return <div>user 입니다</div>;
};
const GuestPage = () => {
  return <div>guest 입니다</div>;
};

export default function SimpleRouter({ userAuth, isLoading }) {
  if (isLoading) {
    return <Loading />;
  }

  switch (userAuth) {
    case "admin":
      return <AdminPage />;
    case "user":
      return <UserPage />;
    case "guest":
      return <GuestPage />;
    default:
      return "에러발생";
  }
}
