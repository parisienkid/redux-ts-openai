import { FC } from "react";

import MainPage from "../pages/mainPage/MainPage";
import ApiPage from "../pages/apiPage/ApiPage";
import ResearchPage from "../pages/researchPage/ResearchPage";
import BlogPage from "../pages/blogPage/BlogPage";
import AboutPage from "../pages/aboutPage/AboutPage";

import {
    Routes,
    Route,
} from "react-router-dom";

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/api' element={<ApiPage/>}/>
            <Route path='/research' element={<ResearchPage/>}/>
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
        </Routes>
    )
};

export default AppRoutes;