import { Navigate,Outlet,useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";

const PrivateRoute = (role) => {
    

    let auth=useAuth();
    const location = useLocation();

    
    //console.log(auth.user.user.rol)
    //verifica que el usuario tenga un rol y sea correcto para ingresar a las rutas que requieren un rol
    if(role.hasRole && auth.user?.user.rol !== role.hasRole){
        let val=false
        return(
            val ? <Outlet/> : <Navigate to={routes.home}/>
        )
    }
    
    //verifica que el usuario  este auntenticado para ingresar a una ruta privada
    return(
        auth.user? <Outlet/> : <Navigate to={location.pathname}/>
    )
        
}
export default PrivateRoute