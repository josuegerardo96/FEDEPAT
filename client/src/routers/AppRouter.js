 // Sistema de rutas
//project page es para cargar un proyecto especifico de acuerdo al id
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import roles from '../helpers/roles';
import routes from '../helpers/routes';
import AccountPage from '../pages/AccountPage';
import UsersPage from '../pages/admin/UsersPage';
import HomePage from '../pages/Home/HomePage';
import NotFoundPage from '../pages/Others/NotFoundPage';
import RegisterPage from '../pages/Register/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RegisterAdminPage from '../pages/admin/RegisterAdmin';
import EditAccount from '../pages/AccountPage/EditAccount'
import AcceptUserPage from '../pages/admin/AcceptUserPage'
import useAuth from '../auth/useAuth'

export default function AppRouter(){
    const { user } = useAuth()
    return(
        
        <Router>
            <Layout>
                <Routes>
                     {/* Ruta principal y login page*/}
                    <Route path={routes.home} element={<HomePage/>}></Route>
                    
                    {/* Rutas publicas*/}
                    <Route element={<PublicRoute />}>
                        <Route path={routes.register} element={<RegisterPage/>}></Route>
                    </Route>
                    
                    
                    {/* Ruta privadas con role de administrador*/}
                    {user && (<> 
                    <Route element={<PrivateRoute hasRole={roles.admin} />}>
                        <Route  path={routes.admin.users} element={<UsersPage/>}></Route>
                        <Route  path={routes.admin.registerAdmin} element={<RegisterAdminPage/>}></Route>
                        <Route  path={routes.admin.acceptusers} element={<AcceptUserPage/>}></Route>
                    </Route>
                    </>
                    )}

                    {/* Ruta privadas sin roles asignados*/}
                    <Route element={<PrivateRoute />}>
                        <Route path={routes.account} element={<AccountPage/>}></Route>
                        <Route path={routes.edituser} element={<EditAccount/>}></Route>

                    </Route>

                    {/* Ruta para errores*/}
                    <Route path='*' element={<NotFoundPage/>}></Route>
                    
                </Routes>
            </Layout>
        </Router>
    )
}