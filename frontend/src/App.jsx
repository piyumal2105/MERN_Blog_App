// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import SignInPage from "./pages/SignInPage/SigninPage";
import SignUpPage from "./pages/SignUpPage/SignupPage";

//Components
import Header from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
