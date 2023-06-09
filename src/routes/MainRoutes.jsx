import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import AddContactPage from "../pages/AddContactPage";
import EditContactPage from "../pages/EditContactPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/add" element={<AddContactPage />} />
          <Route path="/edit/:id" element={<EditContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
