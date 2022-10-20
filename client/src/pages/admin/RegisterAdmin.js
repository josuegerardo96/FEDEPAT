import { useState } from "react";
import { useSignupAdmin } from "../../hooks/useSignUpAdmin";
import {Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import routes from '../../helpers/routes'
import roles from "../../helpers/roles";
import './RegisterAdmin.css';
import new_admin from '../../images/new_admin.png';
import {IoArrowBackCircle} from "react-icons/io5"

import { Snackbar } from '@mui/material';


const SignupAdmin = () => {
        // Constants that control the app's flow

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [nombre, setNombre] = useState ('')
    const [apellidos, setApellidos] = useState ('')
    const [telefono, setTelefono] = useState ('')

    

    const {signup, error, isLoading } = useSignupAdmin()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        await signup(email, password,roles.admin,nombre,apellidos,telefono,true)
    }




    // Const used for the snackbar
    // Const used for the snackbar
    const [open, setOpen] = useState(false);
    const handleToClose = (event, reason) => {
        if ("clickaway" === reason) return;
        setOpen(false);
    };

    const handleClickEvent = () => {
        setOpen(true);
    };




    return (


        <>
            

            <form onSubmit={handleSubmit} className='Adminadd'>            

                {/* Page title */}
                <h3 className="Adminadd-Title">Registrar un nuevo administrador</h3>


                {/* Put the elements next to other */}

                <div className="Adminadd-Line-Inputs">

                    {/* User's name */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label  className="Adminadd-Sub-Title">Nombre</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type = "text"
                            placeholder="Escriba su nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value = {nombre}
                        />
                    </div>
                    


                    {/* User's Last name */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label  className="Adminadd-Sub-Title">Apellidos</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type = "text"
                            placeholder="Escriba sus apellidos"
                            onChange={(e) => setApellidos(e.target.value)}
                            value = {apellidos}
                        />
                    </div>

                </div>




                {/* Put the elements next to each other */}
                <div className="Adminadd-Line-Inputs">
                    
                    
                
                    {/* User's email */}                        
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label  className="Adminadd-Sub-Title">Email</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type = "email"
                            placeholder="Escriba su email"
                            onChange={(e) => setEmail(e.target.value)}
                            value = {email}
                        />
                    </div>


                    {/* User's cellphone number */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label  className="Adminadd-Sub-Title">Teléfono</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type = "text"
                            placeholder="8888 88 88"
                            onChange={(e) => setTelefono(e.target.value)}
                            value = {telefono}
                        />
                    </div>

                </div>

                {/* User's password */}
                <label  className="Adminadd-Sub-Title-Password">Contraseña</label>
                <input
                    className="Adminadd-Input-Personal-Password"
                    type = "password"
                    placeholder="Escriba su contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value = {password}
                />

                

                {/* Sign up button */}
                <button 
                     onClick={handleClickEvent}
                     disabled = {isLoading} 
                    className="Adminadd-Button-Signup">
                        Registrar administrador
                </button>
                {error && <div  className= "error" >{error}</div>}


                <Nav.Link as={NavLink} to={routes.home}>
                    <div className="Adminadd-icono-volver">
                        <IoArrowBackCircle size='25px' color='#4876A6'/>
                        <label className="Adminadd-texto-volver">Volver a la pagina principal</label>
                    </div>
                </Nav.Link>


                <Snackbar
                    anchorOrigin={{horizontal: "left",vertical: "bottom",}}
                    open={open}
                    autoHideDuration={5000}
                    message="Administrador agregado"
                    onClose={handleToClose}
                    
                />

      
            </form>



            {/* First right-half of the screen with an image for editing */}
            <div className="Registeradmin-Right">
                <img className="Main-Img" src={new_admin} alt="Imagen de admin"/>
            </div>

        
        </>

    )
}

export default SignupAdmin