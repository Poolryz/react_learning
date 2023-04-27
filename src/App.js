import React, {useState} from "react";

import '../src/styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRoutes from "./components/AppRoutes";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRoutes/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
