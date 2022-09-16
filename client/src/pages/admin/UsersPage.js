import { useEffect, useState } from "react"
import UserDetails from '../../components/UserDetails'

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
            <div>
                
                {users && users.map((user) =>(
                    <UserDetails key={user._id} user={user} />

                ))}

            </div>
        </div>
    )
}

export default UsersPage