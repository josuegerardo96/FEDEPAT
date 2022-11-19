import { useEffect, useState } from "react"

import { useDeletePlayerRegis } from "../hooks/useDeletePlayerRegis"
import { RiDeleteBinFill } from "react-icons/ri";

import Moment from 'moment';
import './UserAcceptance.css';





const PlayerDetailsComp = ({ player, compid }) => {
    const { deleteplayer, error, isLoading } = useDeletePlayerRegis()
    const [categoria, SetCategoria] = useState('');
    const [idregis, SetIdregis] = useState('');


    useEffect(() => {


        const fetchWorkout = async (jugador, competencia) => {
            const response = await fetch('/api/registcomp/GetListaJugadoresComp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ jugador, competencia })
            })
            const json = await response.json()

            if (response.ok) {
                SetCategoria(json.competition.categoria)
                SetIdregis(json.competition._id)
            }
        }
        fetchWorkout(player._id, compid)
    }, [player._id, compid, categoria])


    const handleSubmit = async (e) => {
        e.preventDefault()

        await deleteplayer(idregis)

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
                        <label className='Solicitudes-caja-textonormal'>{categoria}</label>

                        <div className='Solicitudes-caja-rol-icon'>
                            


                            {/* REJECT THE PLAYER */}
                            <form onSubmit={handleSubmit}>    
                                <button className='botonFORM' disabled = { isLoading}  >
                                    <RiDeleteBinFill color='#CD1F28' size='25px' />
                                    {error && <div className="error"> {error} </div>}
                                </button>  
                            </form>

                            {/* EDIT THE PLAYER 
                            <Link to={`/editplayer/${player._id}` }>
                                    <RiEdit2Fill color='#367E18' size='25px' />
                            </Link>
                        
                            <div style={{width:'20px'}}></div>
                        */}

                        </div>
                    
        </div>
    )

}

export default PlayerDetailsComp