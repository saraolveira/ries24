import React from "react"
import { useEffect } from "react"
import { useLocation, useRoutes } from "react-router-dom"
import ReactGA from "react-ga4"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Premios from "./pages/Premios.jsx"
import RIES16 from "./pages/editions/RIES16.jsx"
import RIES17 from "./pages/editions/RIES17.jsx"
import RIES18 from "./pages/editions/RIES18.jsx"
import RIES19 from "./pages/editions/RIES19.jsx"
import RIES20 from "./pages/editions/RIES20.jsx"
import RIES21 from "./pages/editions/RIES21.jsx"
import RIES22 from "./pages/editions/RIES22.jsx"
import RIES23 from "./pages/editions/RIES23.jsx"

const App = () => {
    const location = useLocation()

    useEffect(() => {
        ReactGA.initialize("G-V7J6BCMDV0")
    }, [])

    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname,
            title: document.title,
        })
    }, [location])

    const element = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/premios",
            element: <Premios />,
        },
        {
            path: "/ries16",
            element: <RIES16 />,
        },
        {
            path: "/ries17",
            element: <RIES17 />,
        },
        {
            path: "/ries18",
            element: <RIES18 />,
        },
        {
            path: "/ries19",
            element: <RIES19 />,
        },
        {
            path: "/ries20",
            element: <RIES20 />,
        },
        {
            path: "/ries21",
            element: <RIES21 />,
        },
        {
            path: "/ries22",
            element: <RIES22 />,
        },
        {
            path: "/ries23",
            element: <RIES23 />,
        },
    ])
    return (
        <div className="w-screen cursor-default overflow-x-hidden">
            <Navbar />

            {React.cloneElement(element, { key: location.pathname })}
            <Footer />
        </div>
    )
}

export default App
