import { FC } from "react";

import MainPage from "../pages/mainPage/MainPage";

import {
    Routes,
    Route,
} from "react-router-dom";

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
        </Routes>
    )
};

export default AppRoutes;