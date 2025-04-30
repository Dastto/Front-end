import {Outlet} from "react-router";
import {Toaster} from "react-hot-toast";

const StarterHandling = () => {
    return (<>
        <Outlet />
        <Toaster />
    </>)
}

export default StarterHandling