import { Navigate,Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";

const PublicRoute = () => {
    
        let auth=useAuth();
        console.log({auth}) //para analizar que trae, el .user es porque asi devuelve la funcion
        return(
            !auth.user ? <Outlet/> : <Navigate to={routes.home}/>
        )
        
    }
export default PublicRoute