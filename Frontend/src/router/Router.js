import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import FriendList from "../components/FriendList";
import Mutual from "../components/MutualFriend";
import UserData from "../components/UserData";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        // element: <FriendList />,
        element: <Mutual />,
      },
      {
        path: "/frientlist",
        element: <FriendList />,
      },
      {
        path: "/userdata",
        element: <UserData />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);
export default router;
