import React, {useContext} from 'react';
import {privateRouters, publicRouters} from "../router/routers";
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "../context";

const AppRoutes = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    return (
        <Routes>
            {isAuth
                ? privateRouters.map(route =>

            <Route
                path={route.path}
                element={route.component}
                exact={route.exact}
            />
        )
                : publicRouters.map(route =>

            <Route
                path={route.path}
                element={route.component}
                exact={route.exact}
            />
        )}



        </Routes>
    );
};

export default AppRoutes;