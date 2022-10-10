import { useEffect, useState } from "react"
import PlayerDetails from '../../components/PlayerDetails'
import useAuth    from '../../auth/useAuth'

const  PlayersPage = () => {
    const [players ,setPlayer] = useState(null)
    const  { user } = useAuth();

    useEffect(() => {
        const fetchWorkout = async (_id) =>{
            const response = await fetch('/api/player/showplayer',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({_id})
            })
            const json = await response.json()
            
            if(response.ok){
                setPlayer(json)
            }
        }
        fetchWorkout(user.user._id)
    },[user.user._id])

    return(
        <div>
            <div>
            <h1 align = "center">Jugadores</h1>

                {players && players.map((player) =>(
                    <PlayerDetails key={player._id} player={player} />

                ))}

            </div>
        </div>
    )
}

export default PlayersPage