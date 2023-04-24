import React from "react";

import '../src/styles/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import PostIdPage from "./pages/PostIdPage";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route exact path="/posts" element={<Posts/>}/>
                    <Route exact path="/posts/:id" element={<PostIdPage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/*" element={<h1>Такой страницы не существует</h1>}/>
                </Routes>

        </BrowserRouter>
    )
}

export default App;
