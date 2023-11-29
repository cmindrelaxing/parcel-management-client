import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import loadingIcon from "../assets/icon/loader.gif";
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading) {
        return <div className="flex justify-center items-center h-[90vh]">
            <img src={loadingIcon} alt="" />
        </div>
    }

    if(user && isAdmin) {
        return children;
    }

    // return <Navigate state={location.state} to="/login"></Navigate>
    return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
};

AdminRoute.propTypes = {
    children: PropTypes.any,
};

export default AdminRoute;