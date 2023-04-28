import React, { useContext, useNavigation } from 'react';
import { privateRouters, publicRouters } from "../router/routers";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import Loader from './UI/Loader/Loader';


const AppRoutes = () => {
    const { isAuth, setIsAuth, isLoading } = useContext(AuthContext)
    if (isLoading) {
        return <Loader />
    }
    return (
        <Routes>
            {isAuth
                ? privateRouters.map(route =>

                    <Route
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )
                : publicRouters.map(route =>

                    <Route
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )}



        </Routes>
    );
};

export default AppRoutes;