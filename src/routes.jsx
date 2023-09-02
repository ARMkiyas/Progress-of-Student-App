import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Generate from "./pages/generate/Generate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Mainlayout from "./layouts/mainlayout";

export const router = createBrowserRouter([

    {
        element: <Mainlayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            
              },
              {
                path: "generate",
                element: <Generate />,
              },
              {
                path: "about",
                element: <About />,
              },
              {
                path: "contact",
                element: <Contact />,
              },
              {
                path: "/contact",
                element: <Contact />,
              }
        ]
    }

  
]);

