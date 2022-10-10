import { useEffect, useState } from "react"
import UserAcceptance from '../../components/UserAcceptance'
import {IoArrowBackCircle} from "react-icons/io5"
import fedepat from '../../images/Fedepat_bg.png';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import './AcceptUserPage.css';


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
            <div className="Paginasolicitudes">

                {/* THIS IS THE SCREENS HEADER */}
                <div className="Paginasolicitudes-header">
                    <div className="Paginasolicitudes-header-volver">
                        <Link to ={routes.home} style={{textDecoration: 'none'}} >
                            <IoArrowBackCircle size='35px' color='#02174A'/>
                        </Link>
                        <label className="Paginasolicitudes-header-volvertexto">Solicitudes de delegados</label>
                    </div>


                    <div className="Paginasolicitudes-header-FEDEPAT">
                        <img src={fedepat} className='Paginasolicitudes-header-logo' alt='Fedepat-logo'/>
                        <label className='Paginasolicitudes-header-texto-FEDEPAT'>Federacion Costarricense de<br/>Patinaje y Deportes Afines</label>
                    </div>
                </div>



                {/* THIS IS THE SCREENS BODY */}
                <div className="Paginasolicitudes-body">
                    <div>
                        {users && users.map((user) =>(
                            <UserAcceptance key={user._id} user={user} />
                        ))}
                    </div> 
                </div>

            </div>
    
        </>
    )
}

export default UsersPage