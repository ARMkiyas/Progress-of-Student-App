import { useState } from "react";
import "./lib/stylesUtils.js";
import * as bootstrap from "bootstrap";
import { router } from "@/routes.jsx";
import { RouterProvider } from "react-router-dom";
import Nav from "@/components/Nav.jsx";

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
