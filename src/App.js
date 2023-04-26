import React from "react";

import '../src/styles/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import PostIdPage from "./pages/PostIdPage";
import {routers} from "./router/routers";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
            {routers.map(route =>

                <Route
                    path={route.path}
                    element={route.component}
                    exact={route.exact}
                />
            )}
            </Routes>

        </BrowserRouter>
    )
}

export default App;
