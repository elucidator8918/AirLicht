import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import FaqsPage from "./pages/FaqsPage";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/auth/PrivateRoute";
import History from "./components/dashboard/History";
import NotFound from "./components/NotFound";
import ChatWithModel from "./components/dashboard/ChatWithModel";

function App() {
  return (
    <div className="max-w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/faqs" element={<FaqsPage />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="" element={<ChatWithModel />} />
          <Route path="CAD" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
