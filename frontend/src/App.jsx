// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUsPage/AboutUsPage";
import Dashboard from "./pages/DashboardPage/DashboardPage";
import Projects from "./pages/ProjectsPage/ProjectsPage";
import SignIn from "./pages/SignInPage/SigninPage";
import SignUp from "./pages/SignUpPage/SignupPage";

//Components
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
