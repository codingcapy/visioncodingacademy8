/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Router configuration with scroll to top behavior
*/

import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Course Pages
import PythonPage from './pages/PythonPage';
import WebDevPage from './pages/WebDevPage';
import ArduinoPage from './pages/ArduinoPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'courses', element: <CoursesPage /> },
            { path: 'gallery', element: <GalleryPage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'contact', element: <ContactPage /> },
            { path: 'auth', element: <AuthPage /> },
            { path: 'privacy', element: <PrivacyPolicy /> },
            { path: 'terms', element: <TermsOfService /> },
            
            // Course Routes
            { path: 'courses/python', element: <PythonPage /> },
            { path: 'courses/web-dev', element: <WebDevPage /> },
            { path: 'courses/arduino', element: <ArduinoPage /> }
        ]
    }
]);
