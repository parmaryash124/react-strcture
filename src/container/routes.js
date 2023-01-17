import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Groceries from "../pages/Groceries";
// import usestateHook from "../pages/usestateHook";
// import AuthGuard from "../components/auth";

const Layout = lazy(() => import("../components/layout"));
// const SignIn = lazy(() => import("../pages/SignIn"));
// const Dashboard = lazy(() => import("../pages/Dashboard"));
// const MyAccount = lazy(() => import("../pages/MyAccount"));

const StateHook = lazy(() => import("../pages/StateHook"));
const Groceries = lazy(() => import("../pages/Groceries"));
const DisplayList = lazy(() => import("../pages/DisplayList"));
const StudentList = lazy(() => import("../pages/StudentList"));
const EditStudent = lazy(() => import("../pages/EditStudent"));
const HookForm = lazy(() => import("../pages/HookForm"));
const Tictac = lazy(() => import("../pages/Tictac"));
const UseMemoHook = lazy(() => import("../pages/Usememohook"));

const Routing = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate replace to="/" />} /> */}
      {/* <Route path="/" element={<Tictac />} /> */}
      {/* <Route path="/signin" element={<SignIn />} /> */}
      <Route
        path="/"
        element={
          // <AuthGuard>
          <Layout />
          // </AuthGuard>
        }
      >
        {/* <Route path="/" element={<Tictac />} /> */}
        <Route path="/usestate" element={<StateHook />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/displayList" element={<DisplayList />} />
        <Route path="/studentList" element={<StudentList />} />
        <Route path="/edit/:id" element={<EditStudent />} />
        <Route path="/hookform" element={<HookForm />} />
        <Route path="/usememo" element={< UseMemoHook/>} />
        {/* <Route index path="/dashboard" element={<Dashboard />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} /> */}
      </Route>
      {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
    </Routes>
  );
};

export default Routing;
