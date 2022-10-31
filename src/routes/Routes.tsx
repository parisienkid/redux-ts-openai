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
const DallePage = lazy(() => import("../pages/dalle-page/DallePage"));
const Page404 = lazy(() => import("../pages/404-page/Page404"));
const DallePost = lazy(() => import("../pages/posts-pages/DallePost"));
const ResearchPost = lazy(() => import("../pages/posts-pages/ResearchPost"))


const AppRoutes: FC = () => {
    return (
        <Suspense fallback={<FallbackPage/>}>
            <Routes>
                <Route path='/redux-ts-openai/' element={<MainPage/>}/>
                <Route path='/redux-ts-openai/api' element={<ApiPage/>}/>
                <Route path='/redux-ts-openai/api/pricing' element={<ApiPagePricing/>}/>
                <Route path='/redux-ts-openai/research' element={<ResearchPage/>}/>
                <Route path='/redux-ts-openai/blog' element={<BlogPage/>}/>
                <Route path='/redux-ts-openai/blog/dall-e-introducing-outpainting' element={<DallePost/>}/>
                <Route path='/redux-ts-openai/about' element={<AboutPage/>}/>
                <Route path='/redux-ts-openai/dall-e-2' element={<DallePage/>}/>
                <Route path='/redux-ts-openai/our-approach-to-alignment-research' element={<ResearchPost/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </Suspense>
    )
};

export default AppRoutes;