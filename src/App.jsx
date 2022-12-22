import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/profile",
  //     element: <Profile />,
  //   },
  //   {
  //     path: "/sign-in",
  //     element: <SignIn />,
  //   },
  //   {
  //     path: "/sign-up",
  //     element: <SignUp />,
  //   },
  //   {
  //     path: "/forget-password",
  //     element: <ForgotPassword />,
  //   },
  // ]);
  return (
    <div className="App">
      {/* <Router>
        <Header />
        <RouterProvider router={router}></RouterProvider>
      </Router> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
