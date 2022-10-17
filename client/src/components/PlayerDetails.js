import { Link } from 'react-router-dom';
import { useDeletePlayer } from "../hooks/useDeletePlayer"
import {RiDeleteBinFill, RiEdit2Fill} from "react-icons/ri";
import Moment from 'moment';
import './UserAcceptance.css';





const PlayerDetails = ({player}) =>{
    const { deleteplayer , error, isLoading } = useDeletePlayer()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        await deleteplayer(player._id)
        
    }

  

    return (



        <div className='Solicitudes-caja'>

                     
                        <label className='Solicitudes-caja-textonormal'>{player.nombre}<br/>{player.apellidos}</label>
                        <label className='Solicitudes-caja-textonormal'>+506 {player.telefono}<br/>{player.email}</label>
                        <label className='Solicitudes-caja-textonormal'>
                            Cédula: {player.identificacion}<br/>
                            Nacimiento: {Moment(player.nacimiento).format("DD-MM-YYYY")} <br/> 
                        </label>
                        <label className='Solicitudes-caja-textonormal'>{player.gender === true ? 'Mujer' : 'Hombre'}</label>

                        <div className='Solicitudes-caja-rol-icon'>
                            


                            {/* REJECT THE PLAYER */}
                            <form onSubmit={handleSubmit}>    
                                <button className='botonFORM' disabled = { isLoading} onClick={() => window.location.reload(false)} >
                                    <RiDeleteBinFill color='#CD1F28' size='25px' />
                                    {error && <div className="error"> {error} </div>}
                                </button>  
                            </form>

                            {/* EDIT THE PLAYER */}
                            <Link to={`/editplayer/${player._id}` }>
                                    <RiEdit2Fill color='#367E18' size='25px' />
                            </Link>
                        
                            <div style={{width:'20px'}}></div>


                        </div>
                    
        </div>
    )

}

export default PlayerDetails