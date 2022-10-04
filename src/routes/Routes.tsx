import { FC, lazy, Suspense } from "react";

import {
    Routes,
    Route,
} from "react-router-dom";

import FallbackPage from "../pages/fallback-page/FallbackPage";
import MainPage from "../pages/main-page/MainPage";
const ApiPage = lazy(() => import("../pages/api-pages/ApiPageMain"));
const ApiPagePricing = lazy(() => import("../pages/api-pages/ApiPagePricing"));
const ResearchPage = lazy(() => import("../pages/research-page/ResearchPage"));
const BlogPage = lazy(() => import("../pages/blog-page/BlogPage"));
const AboutPage = lazy(() => import("../pages/about-page/AboutPage"));
const Page404 = lazy(() => import("../pages/404-page/Page404"));


const AppRoutes: FC = () => {
    return (
        <Suspense fallback={<FallbackPage/>}>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/api' element={<ApiPage/>}/>
                <Route path='/api/pricing' element={<ApiPagePricing/>}/>
                <Route path='/research' element={<ResearchPage/>}/>
                <Route path='/blog' element={<BlogPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </Suspense>
    )
};

export default AppRoutes;