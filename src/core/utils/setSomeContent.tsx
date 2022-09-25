import { FC } from "react";
import Spinner from "../../components/spinner/Spinner";


const setContent = (process: string, ViewComponent: React.ReactElement) => {
    switch (process) {
        case ('loading'):
            return <Spinner/>
        case ('waiting'):
            return <Spinner/>
        case ('idle'):
            return ViewComponent
        case ('error'):
            return <Spinner/>
        default:
            throw new Error ('Unexpected process state')
    }
};

export default setContent;