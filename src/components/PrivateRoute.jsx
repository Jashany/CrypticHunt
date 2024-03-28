import { Navigate , Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const { teamInfo } = useSelector((state) => state.team);
    return (userInfo && teamInfo) ? <Outlet /> : <Navigate to="/signin" replace />;
}

export default PrivateRoute;