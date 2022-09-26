import { Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'
import { useLogOut } from '../hooks/useLogOut'
import roles from '../helpers/roles';
import './Navigation.css';
//import fedepat from '../images/Fedepat_bg.png';

export default function Navigation(){
    const { logout }=useLogOut();
    const { user } = useAuth()
    console.log(user)

    const handleClick = () => {
        logout()
    }
    return(
        <Navbar collapseOnSelect expand='lg'>

            {/* Button in the navbar that leads you to the main users home */}
            <Navbar.Brand as={NavLink} to ={routes.home} className="Navbar-Home">
                Pantalla principal
            </Navbar.Brand> 


            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>  
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="me-auto">
                     
                    
                    {user && user.user.rol === roles.admin && (<> 
                    <NavDropdown title = "Admin">
                        <NavDropdown.Item as={NavLink} to ={routes.admin.users}>Usuarios</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to ={routes.admin.registerAdmin}>Registro Administrador</NavDropdown.Item>
                    </NavDropdown>
                    </>
                    )}
                </Nav>


                <Nav >
                    
                    {!user && (<>
                        <Nav.Link as={NavLink} to ={routes.login}>Iniciar sesion</Nav.Link>
                        <Nav.Link as={NavLink} to ={routes.register}>Registrarse</Nav.Link>
                    </>
                    )}

                    {user && (<> 
                        <Navbar.Brand as={NavLink} to ={routes.home} className="Centrar">
                            {/* <img className="Icono-Fedepat" src={fedepat} alt="Fedepat"/> */}
                            <label className='Navbar-Hola'>Hola</label>
                            <label className='Navbar-Hola-Nombre'>{user.user.nombre}!</label>
                        </Navbar.Brand>

                        <Nav.Link as={NavLink} to ={routes.account}>Mi cuenta</Nav.Link> 
                        <Nav.Link as={NavLink} to ={routes.edituser}>
                        <label className='Navbar-Texto'>Editar</label> 
                        </Nav.Link>
                        <Nav.Link as={NavLink} to ={routes.projects}> Proyectos</Nav.Link> 
                        <Nav.Link to ={routes.home} onClick={handleClick}>
                            <label className='Navbar-Texto'>Cerrar Sesion</label>
                        </Nav.Link>
                    </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}  
//Navbar.Toggle y collapseOnSelect estan hechos para cambiar a modo telefono de acuerdo al tamano
// la 11 es un boton que lo lleva a la ruta
// la 13 es un boton desplegable