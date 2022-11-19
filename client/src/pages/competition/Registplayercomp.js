import { useEffect, useState } from "react"
import PlayerDetailsRegis from '../../components/PlayerDetailsRegis'
import useAuth from '../../auth/useAuth'
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import { IoArrowBackCircle } from "react-icons/io5"
import fedepat from '../../images/Fedepat_bg.png';
import { useParams } from "react-router-dom"
import './navbar.css'
import './Registplayercomp.css'

const Registplayercomp = () => {
    const [players, setPlayer] = useState(null)
    const [filtro, setFiltro] = useState('')
    const [categoria,setCategoria] = useState('')
    const { user } = useAuth();

    const { idcomp } = useParams();

    useEffect(() => {
        const fetchWorkout = async (_id) => {
            const response = await fetch('/api/player/showplayer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ _id })
            })
            const json = await response.json()

            if (response.ok) {
                setPlayer(json)
            }
        }
        fetchWorkout(user.user._id)
    }, [user.user._id])


    return (
        <>

            <div className="Paginasolicitudes">



                {/* THIS IS THE SCREENS HEADER */}
                <div className="Paginasolicitudes-header">
                    <div className="Paginasolicitudes-header-volver">
                        <Link to={routes.verallcompetencias} style={{ textDecoration: 'none' }} >
                            <IoArrowBackCircle size='35px' color='#02174A' />
                        </Link>
                        <label className="Paginasolicitudes-header-volvertexto">Registrar jugador en competencia</label>
                    </div>


                    <div className="Paginasolicitudes-header-FEDEPAT">
                        <img src={fedepat} className='Paginasolicitudes-header-logo' alt='Fedepat-logo' />
                        <label className='Paginasolicitudes-header-texto-FEDEPAT'>Federacion Costarricense de<br />Patinaje y Deportes Afines</label>
                    </div>
                </div>


                {/* THIS IS THE SCREENS BODY */}
                <div className="Paginasolicitudes-body">

                    <div className="registrarJugador-filtros">
                        
                        <label className="registrarJugador-filtros-texto">Filtrar por género: </label>
                        <div style={{width:'20px'}}></div>
                        <select name="catec" id="catec" className="registrarJugador-filtros-dropdown" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
                            <option value="Mujer">Mujer</option>
                            <option value="Hombre">Hombre</option>
                            

                        </select>
                    </div>

                    <div>
                        {players && players.map((player) => (
                            <PlayerDetailsRegis key={player._id} player={player} compid={idcomp} />

                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Registplayercomp