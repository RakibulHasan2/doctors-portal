import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({children}) => {
    {
        const {user, loading} = useContext(AuthContext)
        const location = useLocation();
       if(loading){
        return <div className='text-center mt-5'><button className="btn loading">loading</button></div>
       }
       
        if( user && user.uid)
        {
          return children;
        }
        return <Navigate to= '/login' state={{from: location}} replace></Navigate>
      };
};

export default PrivateRoute;