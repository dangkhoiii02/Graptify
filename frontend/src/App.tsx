// src/App.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./container/Login";
import Homepage from "./container/HomePage";

import LoginLayout from "./layouts/LoginLayouts";
import MainLayout from "./layouts/MainLayouts";

import { PlayerProvider } from "./context/PlayerContext";

const App: React.FC = () => {
  return (
    <PlayerProvider>
      <Routes>
        <Route
          path="/"
          element={
            <LoginLayout>
              <Login />
            </LoginLayout>
          }
        />
        <Route
          path="/mainpage"
          element={
            <MainLayout>
              <Homepage />
            </MainLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PlayerProvider>
  );
};

export default App;
