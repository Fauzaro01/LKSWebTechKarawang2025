import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./Pages/App.jsx";
import RegisterPage from "./Pages/Register.jsx";
import { ResProvider } from "./Pages/Context/ResContext.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import LoginPage from "./Pages/Login.jsx";
import CreatePost from "./Pages/CreatePost.jsx";
import ProtectedRoute from "./Pages/Components/ProtectedRoute.jsx";
import Profile from "./Pages/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <ResProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/createpost" element={
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        }/>
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  </ResProvider>
);
