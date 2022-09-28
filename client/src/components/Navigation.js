// import { Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'
import { useLogOut } from '../hooks/useLogOut'
import roles from '../helpers/roles';
import './Navigation.css';
import fedepat from '../images/Fedepat_bg.png';
import { useState } from 'react'

export default function Navigation(){
    const { logout }=useLogOut();
    const { user } = useAuth()
<<<<<<< HEAD
    console.log(user)
    const [paginaSel, setPaginaSel] = useState('principal');


    const cambiarPaginaSeleccionada=(e)=>{
        setPaginaSel(e);
    }



=======
>>>>>>> 76e749cc296d07d41928a05f5835fe75ae6ab264
    const handleClick = () => {
        logout()
    }
    return(
        <Navbar collapseOnSelect expand='lg' className='Navbar-completa'>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>  
            <Navbar.Collapse id="responsive-navbar-nav">

            {/* This is just the logo and the legend of the FEDEPAT, it has no action */}
            {/* <Navbar.Brand as={NavLink} to ={routes.home}> */}
            <img src={fedepat} className='Navbar-imagen-FEDEPAT' alt='Fedepat-logo'/>
            <label className='Navbar-texto-FEDEPAT'>Federacion Costarricense de<br/>Patinaje y Deportes Afines</label>
                
            {/* </Navbar.Brand>  */}


            
                
                {/* If the user is an admin then show this */}
                {/* <Nav className="">
                    {user && user.user.rol === roles.admin && (<> 
                    <NavDropdown title = "Admin">
                        <NavDropdown.Item as={NavLink} to ={routes.admin.registerAdmin}>Registro Administrador</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to ={routes.admin.users}>Usuarios</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to ={routes.admin.acceptusers}>Aceptar Usuarios</NavDropdown.Item>
                    </NavDropdown>
                    </>
                    )}
                </Nav> */}





                {/* All the options in the right side of the screen
                Pagina principal - Mis equipos  - Editar perfil - Cerrar sesion */}
                <Nav className='Navbar-partederecha'>
                    
                    {/* This buttons does not appear because the register/login page had changed */}
                    {/* {!user && (<>
                        <Nav.Link as={NavLink} to ={routes.login}>Iniciar sesion</Nav.Link>
                        <Nav.Link as={NavLink} to ={routes.register}>Registrarse</Nav.Link>
                    </>
                    )} */}


                    {/* This appears when the user has enter in its account */}
                    {user && (<> 

                        {/* Go to the Pagina principal */}
                        <div className='Navbar-partederecha-opcionconcirculo' >
                            <Nav.Link as={NavLink} to ={routes.home} onClick={() => cambiarPaginaSeleccionada('principal')}>
                                <label className='Navbar-partederecha-textos' style={paginaSel ==='principal'?{fontWeight: 'bold'}:{fontWeight: 'normal'}} >Pagina principal</label>
                            </Nav.Link>
                            <div  className= {paginaSel==='principal' ? 'Navbar-circulorojo' : 'Navbar-circuloblanco' }/>
                        </div>

                        

                        <div className='Navbar-partederecha-opcionconcirculo' >
                            <Nav.Link as={NavLink} to ={routes.account} onClick={() => cambiarPaginaSeleccionada('equipos')}>
                                <label className='Navbar-partederecha-textos' style={paginaSel ==='equipos'?{fontWeight: 'bold'}:{fontWeight: 'normal'}}>Mis equipos</label>
                            </Nav.Link> 
                            <div  className= {paginaSel==='equipos' ? 'Navbar-circulorojo' : 'Navbar-circuloblanco' }/>
                        </div>


                        {/* <Nav.Link as={NavLink} to ={routes.account}>
                            Mi cuenta
                        </Nav.Link>  */}



                        <div className='Navbar-partederecha-opcionconcirculo' onClick={() => cambiarPaginaSeleccionada('editar')} >
                            <Nav.Link as={NavLink} to ={routes.edituser} >
                                <label className='Navbar-partederecha-textos' style={paginaSel ==='editar'?{fontWeight: 'bold'}:{fontWeight: 'normal'}}>Editar perfil</label>
                            </Nav.Link>
                            <div  className= {paginaSel==='editar' ? 'Navbar-circulorojo' : 'Navbar-circuloblanco' }/>
                        </div>


                        {/* <Nav.Link as={NavLink} to ={routes.projects}>
                            Proyectos
                        </Nav.Link>  */}

                        <Nav.Link to ={routes.home} onClick={handleClick} className='Navbar-partederecha-botoncerrarsesion'>
                            <label className='Navbar-partederecha-textos'>Cerrar Sesion</label>
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