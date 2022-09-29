import { FC } from "react";

import MainPage from "../pages/main-page/MainPage";
import ApiPage from "../pages/api-pages/ApiPageMain";
import ApiPagePricing from "../pages/api-pages/ApiPagePricing";
import ResearchPage from "../pages/research-page/ResearchPage";
import BlogPage from "../pages/blog-page/BlogPage";
import AboutPage from "../pages/about-page/AboutPage";

import {
    Routes,
    Route,
} from "react-router-dom";

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/api' element={<ApiPage/>}/>
            <Route path='/api/pricing' element={<ApiPagePricing/>}/>
            <Route path='/research' element={<ResearchPage/>}/>
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
        </Routes>
    )
};

export default AppRoutes;