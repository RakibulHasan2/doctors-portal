// import React, { useContext } from 'react';
// import { AuthContext } from '../../context/AuthProvider';
// import { useLocation, Navigate } from 'react-router-dom';
// import useAdmin from './../../hooks/useAdmin';

// const AdminRoute = ({children}) => {
//     {
//         const {user, loading} = useContext(AuthContext)
//         const [isAdmin, isAdminLoading] = useAdmin(user?.email)
//         const location = useLocation();
//        if(loading || isAdminLoading){
//         return <div className='text-center mt-5'><button className="btn loading">loading</button></div>
//        }
       
//         if( user && isAdmin)
//         {
//           return children;
//         }
//         return <Navigate to= '/login' state={{from: location}} replace></Navigate>
//       };
// };

// export default AdminRoute;