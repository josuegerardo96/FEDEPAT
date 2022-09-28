import { useEffect, useState } from "react"
import UserAcceptance from '../../components/UserAcceptance'
const  UsersPage = () => {
    const [users ,setUsers] = useState(null)
    useEffect(() => {
        const fetchWorkout = async () =>{
            const response = await fetch('/api/user/getusers')
            const json = await response.json()
            
            if(response.ok){
                setUsers(json)
            }
        }
        fetchWorkout()
    },[])

    return(
        <div>
            <h1 align = "center">Delegados en lista de espera</h1>
            <div>
                
                {users && users.map((user) =>(
                    <UserAcceptance key={user._id} user={user} />

                ))}

            </div>
        </div>
    )
}

export default UsersPage