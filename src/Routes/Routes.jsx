import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../Pages/Home/Home';
import Timeline from '../Pages/Timeline/Timeline';
import Stats from '../Pages/Stats/Stats';
import FriendDetails from '../Pages/FriendDetails/FriendDetails';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                loader: async () => {
                    const res = await fetch("/friends-data.json")
                    return res.json();
                },
                Component: Home
            },
            {
                path: "timeline",
                Component: Timeline
            },
            {
                path: "stats",
                Component: Stats
            },
            {
                path: "details",
                Component: FriendDetails
            }
        ]
    }
]);



