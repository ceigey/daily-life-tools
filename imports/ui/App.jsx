
import React from "react"
import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from 'react-router-dom'
import { routes } from './Routes'

const router = createBrowserRouter(routes)


export const App = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

