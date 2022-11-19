import { useEffect, useState } from "react"
import PlayerDetails from '../../components/PlayerDetails'
import useAuth from '../../auth/useAuth'
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import { IoArrowBackCircle } from "react-icons/io5"
import fedepat from '../../images/Fedepat_bg.png';
import './navbar.css'
import './showPlayersPage.css'

const PlayersPage = () => {
    const [players, setPlayer] = useState(null)
    const [genero, setGenero] = useState('todo')

    const { user } = useAuth();

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
                        <Link to={routes.home} style={{ textDecoration: 'none' }} >
                            <IoArrowBackCircle size='35px' color='#02174A' />
                        </Link>
                        <label className="Paginasolicitudes-header-volvertexto">Tus jugadores</label>
                    </div>


                    <div className="Paginasolicitudes-header-FEDEPAT">
                        <img src={fedepat} className='Paginasolicitudes-header-logo' alt='Fedepat-logo' />
                        <label className='Paginasolicitudes-header-texto-FEDEPAT'>Federacion Costarricense de<br />Patinaje y Deportes Afines</label>
                    </div>
                </div>


                {/* THIS IS THE SCREENS BODY */}
                <div className="Paginasolicitudes-body">


                    <div className="Players-filtros">

                        <label className="Players-filtros-texto">Filtrar: </label>
                        <div style={{width:'20px'}}></div>
                        <select name="catec" id="catec" className="Players-filtros-dropdown" onChange={(e) => setGenero(e.target.value)} value={genero}>
                            <option value="todo">todo</option>
                            <option value={true}  >Hombre</option>
                            <option value={false}>Mujer</option>
                        </select>
                    </div>

                    <div>
                        {players && players.map((player) => (
                            <PlayerDetails key={player._id} player={player} />

                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default PlayersPage