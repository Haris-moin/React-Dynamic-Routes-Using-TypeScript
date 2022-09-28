import LoginContainer from "../components/login";
import SignUpContainer from "../components/sign-up";

const authRoutes = [
  {
    path: "/auth",
    title: "auth",
    roles: ["emp", "admin"],
    children: [
      {
        path: "login",
        title: "Login",
        element: <LoginContainer />,
        roles: ["emp", "admin"],
        hidden: true,
      },
      {
        path: "sign-up",
        title: "SignUp",
        element: <SignUpContainer />,
        hidden: true,
        roles: ["emp", "admin"],
      },
    ],
  },
];

export default authRoutes;
