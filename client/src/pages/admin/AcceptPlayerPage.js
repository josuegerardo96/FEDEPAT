import { useEffect, useState } from "react"
import fedepat from '../../images/Fedepat_bg.png';
import {IoArrowBackCircle} from "react-icons/io5"
import PlayerAcceptance from '../../components/PlayerAcceptance'
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';



const  UsersPage = () => {
    const [players ,setPlayers] = useState(null)
    useEffect(() => {
        const fetchWorkout = async () =>{
            const response = await fetch('/api/player/showplayeronwait')
            const json = await response.json()
            
            if(response.ok){
                setPlayers(json)
            }
        }
        fetchWorkout()
    },[])
    console.log(players)
    return(
        <>
            <div className="Paginasolicitudes">
                    {/* THIS IS THE SCREENS HEADER */}
                    <div className="Paginasolicitudes-header">
                            <div className="Paginasolicitudes-header-volver">
                                <Link to ={routes.home} style={{textDecoration: 'none'}} >
                                    <IoArrowBackCircle size='35px' color='#02174A'/>
                                </Link>
                                <label className="Paginasolicitudes-header-volvertexto">Solicitudes para jugadores</label>
                            </div>


                            <div className="Paginasolicitudes-header-FEDEPAT">
                                <img src={fedepat} className='Paginasolicitudes-header-logo' alt='Fedepat-logo'/>
                                <label className='Paginasolicitudes-header-texto-FEDEPAT'>Federacion Costarricense de<br/>Patinaje y Deportes Afines</label>
                            </div>
                        </div>





                    {/* THIS IS THE SCREENS BODY */}

                        <div className="Paginasolicitudes-body">
                            <div>
                                {players && players.map((player) =>(
                                    <PlayerAcceptance key={player._id} player={player} />
                                ))}
                            </div>
                        </div>
                    
            </div>
        </>
    )
}

export default UsersPage