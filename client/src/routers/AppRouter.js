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
import AddPLayerPage from '../pages/Team/addPlayerPage';
import ShowPlayerPage from '../pages/Team/showPlayersPage';
import EditPlayer from '../pages/Team/editPlayer'
import AcceptPlayerPage from '../pages/admin/AcceptPlayerPage'
import FotosDocumentos from '../pages/admin/FotosDocumentos'
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
                        <Route  path={routes.admin.acceptplayer} element={<AcceptPlayerPage/>}></Route>
                        <Route path={routes.admin.verdocumentos} element={<FotosDocumentos/>}></Route>


                    </Route>
                    </>
                    )}

                    {/* Ruta privadas sin roles asignados*/}
                    <Route element={<PrivateRoute />}>
                        <Route path={routes.account} element={<AccountPage/>}></Route>
                        <Route path={routes.edituser} element={<EditAccount/>}></Route>
                        <Route path={routes.addplayer} element={<AddPLayerPage/>}></Route>
                        <Route path={routes.showplayer} element={<ShowPlayerPage/>}></Route>
                        <Route path={routes.editplayer} element={<EditPlayer/>}></Route>
                        



                    </Route>

                    {/* Ruta para errores*/}
                    <Route path='*' element={<NotFoundPage/>}></Route>
                    
                </Routes>
            </Layout>
        </Router>
    )
}