// import { Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'
import { useLogOut } from '../hooks/useLogOut'
import './Navigation.css';
import fedepat from '../images/Fedepat_bg.png';
import { useState } from 'react'

export default function Navigation(){
    const { logout }=useLogOut();
    const { user } = useAuth()
    console.log(user)
    const [paginaSel, setPaginaSel] = useState('principal');


    const cambiarPaginaSeleccionada=(e)=>{
        setPaginaSel(e);
    }



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
                


                {/* ----------------------- RIGHT SIDE OF THE NAV BAR --------------------------------------------------- */}

                {/* All the options in the right side of the screen
                Pagina principal - Mis equipos  - Editar perfil - Cerrar sesion */}
                <Nav className='Navbar-partederecha'>
                    
                    {/* This appears when the user has enter in its account */}
                    {user && (<> 

                        {/* Go to the Pagina principal */}
                        <div className='Navbar-partederecha-opcionconcirculo' >
                            <Nav.Link as={NavLink} to ={routes.home} onClick={() => cambiarPaginaSeleccionada('principal')}>
                                <label className='Navbar-partederecha-textos' style={paginaSel ==='principal'?{fontWeight: 'bold'}:{fontWeight: 'normal'}} >Pagina principal</label>
                            </Nav.Link>
                            <div  className= {paginaSel==='principal' ? 'Navbar-circulorojo' : 'Navbar-circuloblanco' }/>
                        </div>

                        
                        {/* TODO when The teams page has been built I will come back and change this */}
                        <div className='Navbar-partederecha-opcionconcirculo' >
                            <Nav.Link as={NavLink} to ={routes.home} onClick={() => cambiarPaginaSeleccionada('equipos')}>
                                <label className='Navbar-partederecha-textos' style={paginaSel ==='equipos'?{fontWeight: 'bold'}:{fontWeight: 'normal'}}>Mis equipos</label>
                            </Nav.Link> 
                            <div  className= {paginaSel==='equipos' ? 'Navbar-circulorojo' : 'Navbar-circuloblanco' }/>
                        </div>

                        {/* Edit my profile */}
                        <div className='Navbar-partederecha-opcionconcirculo' onClick={() => cambiarPaginaSeleccionada('editar')} >
                            <Nav.Link as={NavLink} to ={routes.edituser} >
                                <label className='Navbar-partederecha-textos' style={paginaSel ==='editar'?{fontWeight: 'bold'}:{fontWeight: 'normal'}}>Editar perfil</label>
                            </Nav.Link>
                            <div  className= {paginaSel==='editar' ? 'Navbar-circulorojo' : 'Navbar-circuloblanco' }/>
                        </div>

                        {/* Log out */}
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