import { useState } from "react";
import { useSignup } from "../../hooks/useSignUp";
import roles from "../../helpers/roles";
import fedepat from '../../images/Fedepat_bg.png';
import './RegisterPage.css';

const Signup = () => {


    // Constants that control the app's flow
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [nombre, setNombre] = useState ('')
    const [apellidos, setApellidos] = useState ('')
    const [telefono, setTelefono] = useState ('')

    //const [rol, setRol] = useState ('')
    const {signup, error, isLoading } = useSignup()


    // Constant function that control the form
    const handleSubmit = async(e) =>{

        e.preventDefault()
        await signup(email, password, roles.delegado, nombre, apellidos, telefono)
    }

    return (
        
        <div>

            {/* First left-half of the screen with the logo and the FEDEPAT's legend */}
            <div className="Main-Container">
                <img className="Main-Img" src={fedepat} alt="Fedepat"/>
                <p className='Logo-Text'>Federación costarricense de <br/> Patinaje y Deportes afines</p>
            </div>



            <form onSubmit={handleSubmit} className='Main-Login'>

                



                {/* Page title */}
                <h3 className="Title">Registro de delegado</h3>


                {/* Put the elements next to other */}

                <div className="Line-Inputs">

                    {/* User's name */}
                    <div className="Line-Inputs-Blocks">
                        <label  className="Sub-Title">Nombre</label>
                        <input
                            className="Input-Personal-Data"
                            type = "text"
                            placeholder="Escriba su nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value = {nombre}
                        />
                    </div>
                    


                    {/* User's Last name */}
                    <div className="Line-Inputs-Blocks">
                        <label  className="Sub-Title">Apellidos</label>
                        <input
                            className="Input-Personal-Data"
                            type = "text"
                            placeholder="Escriba sus apellidos"
                            onChange={(e) => setApellidos(e.target.value)}
                            value = {apellidos}
                        />
                    </div>

                </div>




                {/* Put the elements next to each other */}
                <div className="Line-Inputs">
                    
                    
                
                    {/* User's email */}                        
                    <div className="Line-Inputs-Blocks">
                        <label  className="Sub-Title">Email</label>
                        <input
                            className="Input-Personal-Data"
                            type = "email"
                            placeholder="Escriba su email"
                            onChange={(e) => setEmail(e.target.value)}
                            value = {email}
                        />
                    </div>


                    {/* User's cellphone number */}
                    <div className="Line-Inputs-Blocks">
                        <label  className="Sub-Title">Teléfono</label>
                        <input
                            className="Input-Personal-Data"
                            type = "text"
                            placeholder="8888 88 88"
                            onChange={(e) => setTelefono(e.target.value)}
                            value = {telefono}
                        />
                    </div>

                </div>

                {/* User's password */}
                <label  className="Sub-Title-Password">Contraseña</label>
                <input
                    className="Input-Personal-Password"
                    type = "password"
                    placeholder="Escriba su contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value = {password}
                />

                

                {/* Sign up button */}
                <button daisbled = {isLoading} className="Button-Signup">Registrarse</button>
                {error && <div  className= "error" >{error}</div>}
        
      
        </form>

        </div>

    )
}

export default Signup