import React, { useState } from "react";
import SimpleRouter from "./components/ex05/SimpleRouter";
// ["admin", "user", "guest"];
export default function AppEx5() {
  const [authority, setAuthority] = useState();
  return (
    <>
      <button onClick={() => setAuthority("admin")}>admin</button>
      <button onClick={() => setAuthority("user")}>user</button>
      <button onClick={() => setAuthority("guest")}>guest</button>
      <SimpleRouter authority={authority} />
    </>
  );
}
