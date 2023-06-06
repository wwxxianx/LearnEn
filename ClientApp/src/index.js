import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import Root from "./components/NavMenu/Root";
import Courses from "./pages/Courses/index";
import Home from "./pages/HomePage";
import VocabPage from "./pages/Vocab";
import AdminRoot from "./pages/Admin/Root/AdminRoot";
import ManageUsers from "./pages/Admin/ManageUsers";
import ManageCourses from "./pages/Admin/ManageCourses";
import { Toaster } from "react-hot-toast";
import Course from "./pages/Course/index";
import { allCourses } from "./libs/courses";
import ErrorPage from "./pages/Error/index";
import FunGuess from "./pages/FunGuess/index";
import WritingExercise from "./pages/Writing/index";
import Writings from "./pages/Writings/index";
import Account from "./pages/Account/index";
import ManageAdmins from "./pages/Admin/ManageAdmins/index";
import AboutUs from "./pages/AboutUs/index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />,
            },
            {
                path: "account/:userId",
                element: <Account />,
                errorElement: <ErrorPage />,
                loader: async ({ params }) => {
                    return fetch(`/api/customer/${params.userId}`)
                }
            },
            {
                path: "courses",
                element: <Courses />,
                errorElement: <ErrorPage />,
            },
            {
                path: "vocab",
                element: <VocabPage />,
            },
            {
                path: "course/:id",
                element: <Course />,
                loader: ({ params }) => {
                    console.log(params)
                    return allCourses.filter((course) => course.id === params.id)
                }
            },
            {
                path: "funguess",
                element: <FunGuess />
            },
            {
                path: "writings",
                element: <Writings />
            },
            {
                path: "writing/:exerciseId",
                element: <WritingExercise />,
                loader: async ({ params }) => {
                    return fetch(`/api/writingExercise/${params.exerciseId}`)
                },
            },
            {
                path: "aboutus",
                element: <AboutUs />,
            },
        ],
    },
    {
        path: "admin",
        element: <AdminRoot />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "manageUsers",
                element: <ManageUsers />,
                errorElement: <ErrorPage />
            },
            {
                path: "manageCourses",
                element: <ManageCourses />,
                errorElement: <ErrorPage />
            },
            {
                path: "manageAdmins",
                element: <ManageAdmins />,
                errorElement: <ErrorPage />
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Toaster />
        <RouterProvider router={router} />
    </React.StrictMode>
);
