import React from "react";

export default function SimpleRouter({ authority }) {
  return (
    <>
      {authority === "admin" && <AdminPage />}
      {authority === "user" && <UserPage />}
      {authority === "guest" && <GuestPage />}
    </>
  );
}

function AdminPage() {
  return <div>admin 입니다</div>;
}
function UserPage() {
  return <div>user 입니다</div>;
}
function GuestPage() {
  return <div>guest 입니다</div>;
}
