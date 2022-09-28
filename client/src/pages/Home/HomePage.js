// import {Container, Row ,Col,Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import useAuth from '../../auth/useAuth'; 
import './HomePage.css';
import fedepat from '../../images/Fedepat_bg.png';

// These are the libraries in the "LoginPage.js" file
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin"



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
                        <h3 className='Title-Home'>Iniciar sesion</h3>
                        
                    
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


                        {/* Are you an admin? CHECKBOX
                        <div className='Checkbox-Admin-Home'>
                            <input 
                                type="checkbox" 
                                className='CheckBox'
                            />
                            <label className='Checkbox-Label-Home'>Soy administrador</label>
                        </div> */}



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




                        {/* <Div className='mt-5'>
                        <Col md={{span: 6, offset:3 }} className="mb-5">
                        <h2>Bienvenidos a asociacion deportiva</h2>
                        <p>¡Aquí podrás gestionar registrar tus equipos!</p>
                        <div>

                        {!user && (<>
                            <Col  className="mb-2" >
                            <Button as={Link} to={routes.login}>Ingresa</Button>  
                            </Col>
                            
                            <Col className="mb-2" >
                            <Button as={Link} to={routes.register} className= "ml-1" >Crear una cuenta</Button>
                            </Col>
                            </>
                        )} 

                        </div>
                        </Col>
                        */}

                    </>
                )} 

            </div>

                <img 
                    className="img-fluid"
                    src = "/img/task-manager.svg"
                    alt = "gestor-de-tareas"
                    style={{height: '30px'}}
                />
                <p> Disfruta  del deporte</p>
            

        </div>

    )
}