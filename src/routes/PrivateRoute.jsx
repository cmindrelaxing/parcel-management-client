import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingIcon from "../assets/icon/loader.gif";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return <div className="flex justify-center items-center h-[90vh]">
            <img src={loadingIcon} alt="" />
        </div>
    }

    if(user) {
        return children;
    }

    // return <Navigate state={location.state} to="/login"></Navigate>
    return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
    
};

PrivateRoute.propTypes = {
    children: PropTypes.any,
};

export default PrivateRoute;