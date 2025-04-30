import {Outlet} from "react-router";
import Header from "~/Components/Commans/Header/Header";

const MasterLayout = () => {
    return (<>
        <Header />
        <Outlet />
    </>)
}

export default MasterLayout