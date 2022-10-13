import { useState } from "react";
import { useSignup } from "../../hooks/useSignUp";
import roles from "../../helpers/roles";
import fedepat from '../../images/Fedepat_bg.png';
import './RegisterPage.css';
import {toast} from "react-toastify"

const Signup = () => {


    // Constants that control the app's flow
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [nombre, setNombre] = useState ('')
    const [apellidos, setApellidos] = useState ('')
    const [telefono, setTelefono] = useState ('')
    const [state,setState]=useState('');
    //const [rol, setRol] = useState ('')
    const {signup, error, isLoading } = useSignup()

    const chekboxState=()=>{
        var isChecked = document.getElementById('chekVal').checked;
        setState(isChecked)

    }

    // Constant function that control the form
    const handleSubmit = async(e) =>{
        if(!state){
            e.preventDefault()

            toast.error("No acepto terminos y condicones")        }
        else{
        e.preventDefault()
        await signup(email, password, roles.delegado, nombre, apellidos, telefono,false)
        }
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

            <br></br>
            <div className="App">
            <div>
                <input type="checkbox" id="chekVal" name="topping" value="Paneer" onChange={()=>chekboxState()} />
                Acepto los terminos y condiciones:
            </div>
            <div>
            <a href="#openModal">terminos y condicones</a>

            <div id="openModal" className="modalDialog">
	        <div>
		        <a href="#closemodal" title="Close" className="closemodal">X</a>
		            <h2>Terminos y condiciones</h2>
		            <textarea className = "textare-modal" readOnly="readonly" defaultValue="Los Términos y Condiciones representan el documento que ayuda a prevenir y resolver los problemas. Por ello, son fundamentales en muchos casos para defenderse en caso de abuso. Las Condiciones de servicio establecen la forma en que se puede utilizar tu producto, servicio o contenido de forma legalmente vinculante."
                    ></textarea>
		       
	            </div>
            </div>

            </div>
            </div>               
            
             {/* Sign up button */}
                <button daisbled = {isLoading} className="Button-Signup">Registrarse</button>
                {error && <div  className= "error" >{error}</div>}
        
      
        </form>

        </div>

    )
}

export default Signup