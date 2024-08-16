
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: router for Vision Coding Academy
 */

import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SIgnupPage";
import GalleryPage from "./pages/GalleryPage";
import SchedulePage from "./pages/SchedulePage";
import PythonPage from "./pages/PythonPage";
import Python2Page from "./pages/Python2Page";
import InterviewPrepPage from "./pages/InterviewPrepPage";
import SummerCampPage from "./pages/SummerCampPage";
import AdvancedCsPage from "./pages/AdvancedCsPage";
import WebDevPage from "./pages/WebDevPage";
import DevOpsPage from "./pages/DevOpsPage";
import WebDev2Page from "./pages/WebDev2Page";
import CSharpPage from "./pages/CSharpPage";
import RobloxPage from "./pages/RobloxPage";
import ArduinoPage from "./pages/ArduinoPage";
import CPage from "./pages/CPage";
import CPlusPlusPage from "./pages/CPlusPlusPage";
import APCSPage from "./pages/APCSPage";
import CCCPage from "./pages/CCCPage";
import PaymentPage from "./pages/PaymentPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AccountPage from "./pages/AccountPage";

export function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/summer-camp" element={<SummerCampPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/courses/python" element={<PythonPage />} />
                <Route path="/courses/python2" element={<Python2Page />} />
                <Route path="/courses/webdev" element={<WebDevPage />} />
                <Route path="/courses/webdev2" element={<WebDev2Page />} />
                <Route path="/courses/csharp" element={<CSharpPage />} />
                <Route path="/courses/roblox" element={<RobloxPage />} />
                <Route path="/courses/arduino" element={<ArduinoPage />} />
                <Route path="/courses/c" element={<CPage />} />
                <Route path="/courses/cpp" element={<CPlusPlusPage />} />
                <Route path="/courses/apcs" element={<APCSPage />} />
                <Route path="/courses/ccc" element={<CCCPage />} />
                <Route path="/courses/interviewprep" element={<InterviewPrepPage />} />
                <Route path="/courses/advancedcs" element={<AdvancedCsPage />} />
                <Route path="/courses/devops" element={<DevOpsPage />} />
                <Route path="/user" element={<AccountPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            </Route>
        )
    )
    return router
}