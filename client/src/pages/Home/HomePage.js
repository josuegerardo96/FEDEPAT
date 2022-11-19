// import {Container, Row ,Col,Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import useAuth from '../../auth/useAuth'; 
import './HomePage.css';
import fedepat from '../../images/Fedepat_bg.png';
import { useState } from "react";
import roles from '../../helpers/roles';
import { useLogin } from "../../hooks/useLogin"

import { IoMdCreate } from "react-icons/io"
import { FaUserCircle } from "react-icons/fa";
import {GiTeamUpgrade} from "react-icons/gi"
import {RiArrowRightSLine, RiCalendarTodoFill, RiAdminLine, RiMailDownloadFill, RiListOrdered, RiFilter3Line, RiTeamFill} from "react-icons/ri"




export default function HomePage(){
    const { user } = useAuth()

    // These are the consts in the "LoginPage.js" file
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const { login , error, isLoading } = useLogin()


    // Another function from the "LoginPage.js" file
    const handleSubmit = async(e) =>{
        e.preventDefault()
        await login(email,password)
    }


    // Here starts the design
    return(
        <div>

            <div>

                {/* If the user is register then it shows the next and 
                if it is not, then it shows what is inside here */}
                {!user && (
                    <>
                    
                    {/* this is the the space for buttons and textfields */}

                    <form onSubmit={handleSubmit} className='Main-Login-Home'>


                        {/* Title of the screen */}
                        <h3 className='Title-Home'>Iniciar sesión</h3>
                        
                    
                        {/* Write the email field */}
                        <label className='Sub-Title-Home'>Email</label>
                        <input
                            className='TextField-Home'
                            type = "email"
                            placeholder='Escribe tu correo'
                            onChange={(e) => setEmail(e.target.value)}
                            value = {email}
                        />
                        

                        {/* Write the password field */}
                        <label className='Sub-Title-Home'>Contraseña</label>
                        <input
                            className='TextField-Home'
                            type = "password"
                            placeholder='Escribe tu contraseña'
                            onChange={(e) => setPassword(e.target.value)}
                            value = {password}
                        />


                        {/* Button for login */}
                        <button disabled = { isLoading } className="Button-Login-Home">Iniciar sesión</button>
                        {error && <div className="error"> {error} </div>}



                        {/* Button and text for sign up */}
                        <div className='Register-Home'>
                            <label className='Register-Invitation-Home'>¿No tienes una cuenta?</label>
                            <Link as={Link} to={routes.register} className="Register-Button-Home" >Crear una cuenta</Link>
                        </div>


                    </form>


{/* --------------------- Logo and image in the left of the screen ----------------------------------------- */}
                    <div className="Main-Container-Home">
                        <img className="Main-Img-Home" src={fedepat} alt="Fedepat"/>
                        <p className='Logo-Text-Home'>Federación costarricense de <br/> Patinaje y Deportes afines</p>
                    </div>


                    </>
                )}



                



















{/* ----------------------------------------------------------USER LOGGED IN ------------------------------------------------------------------------- */}
                

                {/* The user is a delegado */}
                {user && user.user.rol === roles.delegado && (
                    <>
                        <div className='Principal-cuerpo'>
                            
                            {/* This is the card where the user can see its own information */}
                            {/* Principal - cuerpo - cuadro de informacion (P-C-C) */}
                            <div className='P-C-C'>
                                <FaUserCircle size='100px' color='#367E18'/>
                                <label className='P-C-C-textonombrecompleto'>{user.nombre}<br/>{user.apellidos}</label>
                                <label className='P-C-C-textoemailtelefono'>{user.email}</label>
                                <label className='P-C-C-textoemailtelefono' style={{fontSize:'12px'}}>+506 {user.telefono}</label>

                            </div>

                            {/* Separate the user info from the options */}
                            <div style={{width:'100px'}}></div>


                            {/* All the options the user has */}
                            <div className='P-C-listaopciones'>

                                {/* P-C-L: Principal - cuerpo - lista de opciones */}


                                {/* Option 1: REGISTRAR Jugador */}
                                <Link to ={routes.addplayer} style={{textDecoration: 'none'}} > 

                                <div className='P-C-L-cuadro'>
                                        {/* Icon */}
                                        <GiTeamUpgrade size='20px' color='#367E18'/>
                                        {/* Texts */}
                                        <div className='P-C-L-C-texto'>
                                            <label className='P-C-L-C-textoprincipal'>Registrar un jugador</label>
                                            <label className='P-C-L-C-textosecundario'>Podrá subscribir una  persona al sistema para hacerlo  parte del equipo</label>
                                        </div>
                                        {/* Final icon */}
                                        <RiArrowRightSLine size='20px' color='#02174A'/>
                                </div>
                                </Link>

                                
                                {/* Option 2: ver Jugadores */}
                                <Link to ={routes.showplayer} style={{textDecoration: 'none'}} > 

                                <div className='P-C-L-cuadro'>
                                        {/* Icon */}
                                        <GiTeamUpgrade size='20px' color='#367E18'/>
                                        {/* Texts */}
                                        <div className='P-C-L-C-texto'>
                                            <label className='P-C-L-C-textoprincipal'>Ver Jugadores del equipo</label>
                                            <label className='P-C-L-C-textosecundario'>Podrá ver a los jugadores que son parte de su equipo y manejarlos</label>
                                        </div>
                                        {/* Final icon */}
                                        <RiArrowRightSLine size='20px' color='#02174A'/>
                                </div>
                                </Link>


                                {/* Option 2 */}
                               
                                <Link to ={routes.verallcompetencias} style={{textDecoration: 'none'}} > 

                                <div className='P-C-L-cuadro'>
                                        {/* Icon */}
                                        <RiCalendarTodoFill size='20px' color='#367E18'/>
                                        {/* Texts */}
                                        <div className='P-C-L-C-texto'>
                                            <label className='P-C-L-C-textoprincipal'>Ver eventos disponibles</label>
                                            <label className='P-C-L-C-textosecundario'>Vea los eventos que están disponibles y si ya tiene un equipo registrado podrá subscribirlo a un evento</label>
                                        </div>
                                        {/* Final icon */}
                                        <RiArrowRightSLine size='20px' color='#02174A'/>
                                </div>  
                                </Link>


                            </div>
                        </div>
                    </>
                )}








                {/* The user is an admin */}
                {user && user.user.rol === roles.admin && (
                    <>
                        <div className='Principal-cuerpo'>
                            
                            {/* This is the card where the user can see its own information */}
                            {/* Principal - cuerpo - cuadro de informacion (P-C-C) */}
                            <div className='P-C-C'>
                                <FaUserCircle size='100px' color='#367E18'/>
                                <label className='P-C-C-textonombrecompleto'>{user.nombre}<br/>{user.apellidos}</label>
                                <label className='P-C-C-textoemailtelefono'>{user.email}</label>
                                <label className='P-C-C-textoemailtelefono' style={{fontSize:'12px'}}>+506 {user.telefono}</label>
                                <label className='P-C-C-textonombrecompleto' style={{marginTop:'50px', fontSize: '12px'}}>Eres un administrador</label>
                            </div>

                            {/* Separate the user info from the options */}
                            <div style={{width:'50px'}}></div>


                            {/* All the options the user has */}
                            <div className='P-C-listaopciones'>

                                {/* P-C-L: Principal - cuerpo - lista de opciones */}


                                
                                {/* REGISTRAR OTRO ADMINISTRADOR */}
                                <Link to ={routes.admin.registerAdmin} style={{textDecoration: 'none'}} >
                                    <div className='P-C-L-cuadro'>
                                            <RiAdminLine size='20px' color='#367E18'/>
                                            <div className='P-C-L-C-texto'>
                                                <label className='P-C-L-C-textoprincipal'>Registrar otro administrador</label>
                                                <label className='P-C-L-C-textosecundario'>Podrá registrar a otros administradores</label>
                                            </div>
                                            <RiArrowRightSLine size='20px' color='#02174A'/>
                                    </div>
                                </Link>
                                


                                {/* ACEPTAR DELEGADOS */}
                                <Link to ={routes.admin.acceptusers} style={{textDecoration: 'none'}} >
                                    <div className='P-C-L-cuadro'>
                                            <RiMailDownloadFill size='20px' color='#367E18'/>
                                            <div className='P-C-L-C-texto'>
                                                <label className='P-C-L-C-textoprincipal'>Ver solicitudes de registro de delegados</label>
                                                <label className='P-C-L-C-textosecundario'>Podrá ver todas las solicitudes de los delegados que desean registrarse en el sistema</label>
                                            </div>
                                            <RiArrowRightSLine size='20px' color='#02174A'/>
                                    </div>
                                </Link>



                                {/* VER TODOS LOS USUARIOS DE LA PÁGINA */}
                                <Link to ={routes.admin.users} style={{textDecoration: 'none'}} >
                                    <div className='P-C-L-cuadro'>
                                            <RiListOrdered size='20px' color='#367E18'/>
                                            <div className='P-C-L-C-texto'>
                                                <label className='P-C-L-C-textoprincipal'>Ver usuarios registrados en la página</label>
                                                <label className='P-C-L-C-textosecundario'>Podrá ver una lista de todos los usuarios en el sistema, sean delegados o administradores</label>
                                            </div>
                                            <RiArrowRightSLine size='20px' color='#02174A'/>
                                    </div>
                                </Link>



                                
                                {/* Faltan de implementar estas opciones */}




                                 <Link to ={routes.admin.vercompetencia} style={{textDecoration: 'none'}} > 
                                
                                    <div className='P-C-L-cuadro'>
                                            <RiFilter3Line size='20px' color='#367E18'/>
                                            <div className='P-C-L-C-texto'>
                                                <label className='P-C-L-C-textoprincipal'>Ver y filtrar Competencia</label>
                                                <label className='P-C-L-C-textosecundario'>Podrá ver a todos las Competencias registrados y filtrarlos por diferentes categorías</label>
                                            </div>
                                            <RiArrowRightSLine size='20px' color='#02174A'/>
                                    </div>

                                </Link> 



                                {/* <Link to ={routes.admin.registerAdmin} style={{textDecoration: 'none'}} > */}
                                <Link to ={routes.admin.crearcompetencia} style={{textDecoration: 'none'}} >
                                    <div className='P-C-L-cuadro'>
                                            <IoMdCreate size='20px' color='#367E18'/>
                                            <div className='P-C-L-C-texto'>
                                                <label className='P-C-L-C-textoprincipal'>Crear competencia</label>
                                                <label className='P-C-L-C-textosecundario'>Cree eventos deportivos a los cuales los usuarios se podrán registrar</label>
                                            </div>
                                            <RiArrowRightSLine size='20px' color='#02174A'/>
                                    </div>
                                </Link>
                                {/* </Link> */}




                                <Link to ={routes.admin.acceptplayer} style={{textDecoration: 'none'}} > 
                                    <div className='P-C-L-cuadro'>
                                            <RiTeamFill size='20px' color='#367E18'/>
                                            <div className='P-C-L-C-texto'>
                                                <label className='P-C-L-C-textoprincipal'>Ver solicitudes de registro de Jugadores</label>
                                                <label className='P-C-L-C-textosecundario'>Podrá aceptar o rechazar las solicitudes que hacen los delegados al querer registrar un jugador</label>
                                            </div>
                                            <RiArrowRightSLine size='20px' color='#02174A'/>
                                    </div>
                                </Link> 
                                    



                                

                            </div>
                        </div>
                    </>
                )}





                
                 

            </div>

        </div>

    )
}