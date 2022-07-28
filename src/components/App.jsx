import Loader from './Loader'
import AppBar from './AppBar'
import { Routes, Route  } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from 'PublicRoute';
import {  useSelector } from 'react-redux';
import { getIsRefreshing } from 'redux/auth/auth-selectors';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import operations from 'redux/auth/auth-operations';

const HomePage = lazy(()=>
  import('../pages/HomePage' /* webpackCgunkName: "home-page" */)
)
const LoginPage = lazy(()=>
  import('../pages/LoginPage' /* webpackCgunkName: "login-page" */)
)
const RegisterPage = lazy(()=>
  import('../pages/RegisterPage' /* webpackCgunkName: "register-page" */)
)
const ContactsPage = lazy(()=>
  import('../pages/ContactsPage' /* webpackCgunkName: "contacts-page" */)
)
// const AddContactPage = lazy(()=>
//   import('../pages/AddContacPage' /* webpackCgunkName: "add-contacts-page" */)
// )



export default function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);


  const isRefreshing = useSelector(state => getIsRefreshing(state));

  return (
  
    <>
      <AppBar />
      <Suspense fallback={<Loader/>}>
      {!isRefreshing && (
      <Routes>
        <Route path="*" element={<PublicRoute><HomePage /></PublicRoute>} />
       
        <Route
              path="/contacts/*"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
        
        <Route path="/login" element={<PublicRoute restricted redirectTo="/contacts">< LoginPage/></PublicRoute>} />
        <Route path="/register" element={ <PublicRoute restricted redirectTo="/contacts"><RegisterPage /></PublicRoute>} />
        {/* <Route path="/contacts/add" element={<AddContactPage />} /> */}
      </Routes>
       )}
      </Suspense>
      <ToastContainer autoClose={3700} position="top-center" />
      </>
    
  );
}
