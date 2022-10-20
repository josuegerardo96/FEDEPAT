import { useState } from "react";
import { useAddPlayer } from "../../hooks/useAddPlayer";
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import routes from '../../helpers/routes'
import './RegisterAdmin.css';
import new_admin from '../../images/new_admin.png';
import { IoArrowBackCircle } from "react-icons/io5"
import useAuth from "../../auth/useAuth";

import { Snackbar } from '@mui/material';


const AddPlayer = () => {
    // Constants that control the app's flow
    const  { user } = useAuth();
    const [email, setEmail] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [telefono, setTelefono] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [gender, setGender] = useState('')
    const [nacimiento, setNacimiento] = useState('')

    


    const { addplayer , error, isLoading } = useAddPlayer()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addplayer(email, nombre,apellidos, telefono, identificacion, gender, nacimiento,user.user._id,false)
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
                <h3 className="Adminadd-Title">Registrar un nuevo Jugador</h3>


                {/* Put the elements next to other */}

                <div className="Adminadd-Line-Inputs">

                    {/* User's name */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label className="Adminadd-Sub-Title">Nombre</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type="text"
                            placeholder="Escriba su nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                        />
                    </div>



                    {/* User's Last name */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label className="Adminadd-Sub-Title">Apellidos</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type="text"
                            placeholder="Escriba sus apellidos"
                            onChange={(e) => setApellidos(e.target.value)}
                            value={apellidos}
                        />
                    </div>

                </div>




                {/* Put the elements next to each other */}
                <div className="Adminadd-Line-Inputs">



                    {/* User's email */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label className="Adminadd-Sub-Title">Email</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type="email"
                            placeholder="Escriba su email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>


                    {/* User's cellphone number */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label className="Adminadd-Sub-Title">Teléfono</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type="text"
                            placeholder="8888 88 88"
                            onChange={(e) => setTelefono(e.target.value)}
                            value={telefono}
                        />
                    </div>

                </div>

                {/* Put the elements next to each other */}
                <div className="Adminadd-Line-Inputs">



                    {/* Player's ID */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label className="Adminadd-Sub-Title">Identificación</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type="number"
                            placeholder="Escriba su Identificacion"
                            onChange={(e) => setIdentificacion(e.target.value)}
                            value={identificacion}
                        />
                    </div>


                    {/* players's birthday */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label className="Adminadd-Sub-Title">Fecha de nacimiento</label>
                        <input
                            className="Adminadd-Input-Personal-Data-Birthday"
                            type="date"
                            onChange={(e) => setNacimiento(e.target.value)}
                            value={nacimiento !== '' ? nacimiento : "2010-01-01" }
                        />
                    </div>

                </div>


                
                {/* User's gender */}
                <div className="Adminadd-Line-Inputs-Gender">
                    <label className="Adminadd-Sub-Title-Password">Género</label>

                    <div style={{marginRight:'30px'}}></div>


                    <div className='Adminadd-Radio-column'>

                        <div className="Adminadd-Radio-options"> 
                            <input
                                id="male"
                                name="gender"
                                type="radio"
                                className="Adminadd-Radio"
                                onChange={(e) => setGender(false)}
                                value={gender}
                            />
                            <label className="Adminadd-Gender-Text" htmlFor="male">Hombre</label>
                        </div>


                        <div className="Adminadd-Radio-options"> 
                            <input
                                id="female"
                                name="gender"
                                type="radio"
                                className="Adminadd-Radio"
                                onChange={(e) => setGender(true)}
                                value={gender}
                            />
                            <label className="Adminadd-Gender-Text" htmlFor="female">Mujer</label>
                        </div>
                    
                    </div>
            
                </div>



                {/* Sign up button */}
                <button
                    onClick={handleClickEvent}
                    disabled={isLoading}
                    className="Adminadd-Button-Signup">
                    Registrar Jugador
                </button>
                {error && <div className="error" >{error}</div>}


                <Nav.Link as={NavLink} to={routes.home}>
                    <div className="Adminadd-icono-volver">
                        <IoArrowBackCircle size='25px' color='#4876A6' />
                        <label className="Adminadd-texto-volver">Volver a la pagina principal</label>
                    </div>
                </Nav.Link>


                <Snackbar
                    anchorOrigin={{ horizontal: "left", vertical: "bottom", }}
                    open={open}
                    autoHideDuration={5000}
                    message="Jugador agregado"
                    onClose={handleToClose}

                />


            </form>



            {/* First right-half of the screen with an image for editing */}
            <div className="Registeradmin-Right">
                <img className="Main-Img" src={new_admin} alt="Imagen de admin" />
            </div>


        </>

    )
}

export default AddPlayer
