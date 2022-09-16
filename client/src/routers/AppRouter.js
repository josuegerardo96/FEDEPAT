 // Sistema de rutas
//project page es para cargar un proyecto especifico de acuerdo al id
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import roles from '../helpers/roles';
import routes from '../helpers/routes';
import AccountPage from '../pages/AccountPage';
import UsersPage from '../pages/admin/UsersPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectPage from '../pages/ProjectPage';
import ProjectsPage from '../pages/ProjectsPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RegisterAdminPage from '../pages/admin/RegisterAdmin';
import EditAccount from '../pages/AccountPage/EditAccount'
import useAuth from '../auth/useAuth'

export default function AppRouter(){
    const { user } = useAuth()
    return(
        
        <Router>
            <Layout>
                <Routes>
                     {/* Ruta principal*/}
                    <Route path={routes.home} element={<HomePage/>}></Route>
                    
                    {/* Rutas publicas*/}
                    <Route element={<PublicRoute />}>
                        <Route path={routes.login} element={<LoginPage/>}></Route>
                        <Route path={routes.register} element={<RegisterPage/>}></Route>
                        
                    </Route>
                    
                    
                    {/* Ruta privadas con role de administrador*/}
                    {user && (<> 
                    <Route element={<PrivateRoute hasRole={roles.admin} />}>
                        <Route  path={routes.admin.users} element={<UsersPage/>}></Route>
                        <Route  path={routes.admin.registerAdmin} element={<RegisterAdminPage/>}></Route>
                    </Route>
                    </>
                    )}

                    {/* Ruta privadas sin roles asignados*/}
                    <Route element={<PrivateRoute />}>
                        <Route path={routes.account} element={<AccountPage/>}></Route>
                        <Route path={routes.project()} element={<ProjectPage/>}></Route>
                        <Route path={routes.projects} element={<ProjectsPage/>}></Route>
                        <Route path={routes.edituser} element={<EditAccount/>}></Route>

                    </Route>

                    {/* Ruta para errores*/}
                    <Route path='*' element={<NotFoundPage/>}></Route>
                    
                </Routes>
            </Layout>
        </Router>
    )
}