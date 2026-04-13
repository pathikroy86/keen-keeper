import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../Pages/Home/Home';
import Timeline from '../Pages/Timeline/Timeline';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true, Component: Home
            },
            {
                path: "timeline",
                Component: Timeline
            }
        ]
    }
]);



