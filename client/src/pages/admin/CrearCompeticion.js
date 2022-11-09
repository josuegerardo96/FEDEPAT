import { useState } from "react";
import { useSignupCompetition } from "../../hooks/useSignupCompetition";
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import routes from '../../helpers/routes'
import './RegisterAdmin.css';
import new_admin from '../../images/new_admin.png';
import { IoArrowBackCircle } from "react-icons/io5"

import { Snackbar } from '@mui/material';


const SignupCompetition = () => {
    // Constants that control the app's flow
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${("0" + current.getDate()).slice(-2)}`;

    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('Patín recreativo en línea o tradicional (4 ruedas)')
    const [provincia, setProvincia] = useState('San Jose')
    const [ubicación, setUbicación] = useState('')
    const [fecha, setFecha] = useState(date)



    const { signup, error, isLoading } = useSignupCompetition()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(nombre, tipo,provincia, ubicación, fecha)
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
                <h3 className="Adminadd-Title">Registrar una Competencia </h3>


                {/* Put the elements next to other */}

                <div className="Adminadd-Line-Inputs">

                    {/* competition's name */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label className="Adminadd-Sub-Title">Nombre</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type="text"
                            placeholder="Escriba el nombre de la competencia"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                        />
                    </div>
                </div>


                {/* Put the elements next to each other */}
                <div className="Adminadd-Line-Inputs">

                    <div className="Adminadd-Line-Inputs-Blocks">

                        {/*
                        <label htmlFor="catec">Seleccione una categoria: </label>
                        <select name="catec" id="catec" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
                            <option value="Prejuvenil (13-14 años)">Prejuvenil (13-14 años)</option>
                            <option value="Juvenil (15-18 años)">Juvenil (15-18 años)</option>
                            <option value="Mayor (19 y más años)">Mayor (19 y más años)</option>
                            <option value="Open (15 y más años)">Open (15 y más años)</option>

                            <option value="Infantil C (8 años)">Infantil C (8 años)</option>
                            <option value="Infantil B2 (9 años)">Infantil B2 (9 años)</option>
                            <option value="Infantil 81 (10 años)">Infantil 81 (10 años)</option>
                            <option value="Infantil A2 (11 años)">Infantil A2 (11 años)</option>
                            <option value="Infantil A1 (12 años)">Infantil A1 (12 años)</option>

                        </select>
                        */}

                        <label htmlFor="catec">Seleccione una Tipo del Torneo: </label>
                        <select name="catec" id="catec" onChange={(e) => setTipo(e.target.value)} value={tipo}>
                            <option value="Patín recreativo en línea o tradicional (4 ruedas)">Patín recreativo en línea o tradicional (4 ruedas)</option>
                            <option value="Semiprofesional bota alta en línea">Semiprofesional bota alta en línea</option>
                        </select>

                        <br></br>
                        <label htmlFor="catec">Provincia: </label>
                        <select name="catec" id="catec" onChange={(e) => setProvincia(e.target.value)} value={provincia}>
                            <option value="San Jose">San Jose</option>
                            <option value="Cartago">Cartago</option>
                            <option value="Heredia">Heredia</option>
                            <option value="Limón">Limón</option>
                            <option value="Alajuela">Alajuela</option>
                            <option value="Puntarenas">Puntarenas</option>
                            <option value="Guanacaste">Guanacaste</option>
                        </select>

                    {/* competition's name */}
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label className="Adminadd-Sub-Title">Ubicación</label>
                        <input
                            className="Adminadd-Input-Personal-Data"
                            type="text"
                            placeholder="Escriba el nombre de la competencia"
                            onChange={(e) => setUbicación(e.target.value)}
                            value={ubicación}
                        />
                    </div>
                
                    <div className="Adminadd-Line-Inputs-Blocks">
                        <label className="Adminadd-Sub-Title">Fecha de inico</label>
                        <input
                            className="Adminadd-Input-Personal-Data-Birthday"
                            type="date"
                            onChange={(e) => setFecha(e.target.value)}
                            value={fecha !== '' ? fecha : date }
                        />
                    </div>



                    </div>

                </div>

                {/* competencia tipo*/}

                <div className="Adminadd-Line-Inputs-Blocks">

                </div>


                {/* Sign up button */}
                <button
                    onClick={handleClickEvent}
                    disabled={isLoading}
                    className="Adminadd-Button-Signup">
                    Registrar Competencia
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
                    message="Competencia  agregada"
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

export default SignupCompetition