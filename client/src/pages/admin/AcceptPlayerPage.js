import { useEffect, useState } from "react"
import PlayerAcceptance from '../../components/PlayerAcceptance'
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
        <div>
            <h1 align = "center">Jugadores en lista de espera</h1>
            <div>
                
                {players && players.map((player) =>(
                    <PlayerAcceptance key={player._id} player={player} />

                ))}

            </div>
        </div>
    )
}

export default UsersPage