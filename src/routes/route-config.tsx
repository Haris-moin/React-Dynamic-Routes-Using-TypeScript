import About from "../components/common/about";
import Contact from "../components/common/contact";
import Todos from "../components/todos";

export const routConfig = [
  {
    path: "/",
    title: "parent",
    roles: ["emp", "admin"],
    children: [
      {
        path: "/todos",
        title: "Todos",
        element: <Todos />,
        roles: ["emp", "admin"],
      },
      {
        path: "/contact",
        title: "Todos",
        element: <Contact />,
        roles: ["emp", "admin"],
      },
    ],
  },
  {
    path: "/about",
    title: "parent",
    roles: ["emp", "admin"],
    children: [
      {
        path: "/about",
        title: "Todos",
        element: <About />,
        roles: ["emp", "admin"],
      },
    ],
  },
];
