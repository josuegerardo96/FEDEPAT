import { useAcceptUser } from "../hooks/useAcceptUser"
import useAuth from '../auth/useAuth'
import { useDeleteUser } from "../hooks/useDeleteUser"
import {RiDeleteBinFill, RiCheckboxCircleFill} from "react-icons/ri";
import { Link } from 'react-router-dom';

import './UserAcceptance.css';


const UserAcceptance = ({user}) =>{
    const { acceptuser , erroraccept, isLoadingAccept } = useAcceptUser()
    const { deleteuser , error, isLoading } = useDeleteUser()


    const  auth  = useAuth();
    const handleSubmit = async(e) =>{
        e.preventDefault()

        await acceptuser(user.email)
        
    }
    const handleAlternate = async(e) =>{
        e.preventDefault()
        console.log("hola")
        await deleteuser(user.email)
        
    }
    return (

        <div>
            {auth.user.email !== user.email && !user.estado && (
               
                    <div className='Solicitudes-caja'>

                     
                        <label className='Solicitudes-caja-textonormal'>{user.nombre}<br/>{user.apellidos}</label>
                        <label className='Solicitudes-caja-textonormal'>+506 {user.telefono}</label>
                        <label className='Solicitudes-caja-textonormal' style={{width:'30%'}}>{user.email}</label>

                        <div className='Solicitudes-caja-rol-icon'>
                            <label className='Solicitudes-caja-textonegrita'>{user.rol}</label>
                            <div style={{width:'40px'}}></div>
                            

                            {/* ACCEPT THE PERSON */}
                            <form onSubmit={handleSubmit}> 
                                <button className='botonFORM' disabled = { isLoadingAccept} onClick={() => window.location.reload(false)} >
                                    <RiCheckboxCircleFill color='#367E18' size='25px' />
                                    {erroraccept && <div className="error"> {erroraccept} </div>}
                                </button>
                            </form>
                            <div style={{width:'20px'}}></div>


                            {/* REJECT THE PERSON */}
                            <form onSubmit={handleAlternate}>    
                                <button className='botonFORM' disabled = { isLoading} onClick={() => window.location.reload(false)} >
                                    <RiDeleteBinFill color='#CD1F28' size='25px' />
                                    {error && <div className="error"> {error} </div>}
                                </button>  
                            </form>
                            
                            <Link to={`/admin/verdocumentos/${user._id}` }> Datos </Link>

                        </div>
                    
                    </div>
            )}
        </div>

    )

}

export default UserAcceptance