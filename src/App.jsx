import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
    {
      path: "/signin",
      element: <SignIn/>,
    },
    {
      path: "/signup",
      element: <SignUp/>,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword/>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
