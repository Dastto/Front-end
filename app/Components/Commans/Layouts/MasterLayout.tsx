import {Outlet} from "react-router";

const MasterLayout = () => {
    return (<>
        <Header />
        <Outlet />
    </>)
}

export default MasterLayout