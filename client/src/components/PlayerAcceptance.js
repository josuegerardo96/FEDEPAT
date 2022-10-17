import {useEffect, useState} from "react"
import { useAcceptPlayer } from "../hooks/useAcceptPlayer"
import { useDeletePlayer } from "../hooks/useDeletePlayer"
import {RiDeleteBinFill, RiCheckboxCircleFill} from "react-icons/ri";
import Moment from 'moment';
import './UserAcceptance.css';




const PlayerAcceptance = ({player}) =>{
    const { acceptplayer , erroraccept, isLoadingAccept } = useAcceptPlayer()
    const { deleteplayer , error, isLoading } = useDeletePlayer()
    const [equipo , SetEquipo] = useState({user:{
        email: "Cargando"
    }})

    useEffect(() => {
        const fetchWorkout = async (_id) =>{
            const response = await fetch('/api/user/getOneuser',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({_id})
            })
            const json = await response.json()
            
            if(response.ok){
                SetEquipo(json)
            }
        }
        fetchWorkout(player.equipo)
    },[player.equipo])
    
    //console.log("equipo")
    console.log(equipo)
    const handleSubmit = async(e) =>{
        e.preventDefault()

        await acceptplayer(player._id)
        
    }
    const handleAlternate = async(e) =>{
        e.preventDefault()
        console.log("hola")
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


                        </div>
                    
        </div>

    )

}

export default PlayerAcceptance