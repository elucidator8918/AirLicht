import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import FaqsPage from "./pages/FaqsPage";

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
      </Routes>
    </div>
  );
}

export default App;
