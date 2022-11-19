
import { useDeleteUser } from "../hooks/useDeleteUser"
import useAuth from '../auth/useAuth'
import './UserDetails.css';
import {RiDeleteBinFill} from "react-icons/ri";


const UserDetails = ({user}) =>{
    const { deleteuser , error, isLoading } = useDeleteUser()
    const  auth  = useAuth();
    const handleSubmit = async(e) =>{
        e.preventDefault()

        await deleteuser(user.email)
        
    }
    return (
        
        <div>
            {auth.user.email !== user.email && user.estado && (

                <form onSubmit={handleSubmit}>   
                    <div className='Usuario-caja'>

                     
                        <label className='Usuario-caja-textonormal'>{user.nombre}<br/>{user.apellidos}</label>
                        <label className='Usuario-caja-textonormal'>+506 {user.telefono}</label>
                        <label className='Usuario-caja-textonormal' style={{width:'30%'}}>{user.email}</label>

                        <div className='Usuario-caja-rol-icon'>
                            <label className='Usuario-caja-textonegrita'>{user.rol}</label>
                            <div style={{width:'20px'}}></div>

                            <button className='botonFORM' disabled = {isLoading} onClick={() => window.location.reload(false)} >
                                <RiDeleteBinFill color='#CD1F28' size='25px' />
                            </button>
                            {error && <div className="error"> {error} </div>}
                        
                        </div>
                    
                    
                    </div>
                </form>
            )}
        </div>
    )
}

export default UserDetails