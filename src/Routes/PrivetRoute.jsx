import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import PropTypes from 'prop-types'; // ES6
import { AuthContext } from '../Pages/Provider/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading) {
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;