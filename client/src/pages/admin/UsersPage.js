import { useEffect, useState } from "react"
import UserDetails from '../../components/UserDetails'
import './UserPage.css';
import {IoArrowBackCircle} from "react-icons/io5"
import fedepat from '../../images/Fedepat_bg.png';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';


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
        <>

            <div className="Paginausuarios">

                {/* THIS IS THE SCREENS HEADER */}
                <div className="Paginausuarios-header">
                    <div className="Paginausuarios-header-volver">
                        <Link to ={routes.home} style={{textDecoration: 'none'}} >
                            <IoArrowBackCircle size='35px' color='#02174A'/>
                        </Link>
                        <label className="Paginausuarios-header-volvertexto">Usuarios en el sistema</label>
                    </div>


                    <div className="Paginausuarios-header-FEDEPAT">
                        <img src={fedepat} className='Paginausuarios-header-logo' alt='Fedepat-logo'/>
                        <label className='Paginausuarios-header-texto-FEDEPAT'>Federacion Costarricense de<br/>Patinaje y Deportes Afines</label>
                    </div>
                </div>



                {/* THIS IS THE SCREENS BODY */}

                <div className="Paginausuarios-body">
                    <div>
                        {users && users.map((user) =>(
                            <UserDetails key={user._id} user={user} />
                        ))}
                    </div> 
                </div>

            </div>





            
        </>
    )
}

export default UsersPage