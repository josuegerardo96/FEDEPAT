import { useState } from "react";
import { useSignup } from "../../hooks/useSignUp";
import roles from "../../helpers/roles";
import fedepat from '../../images/Fedepat_bg.png';
import './RegisterPage.css';
import { toast } from "react-toastify"
import { useImageUpload } from "../../hooks/useImageUpload";

const Signup = () => {


    // Constants that control the app's flow
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [telefono, setTelefono] = useState('')
    const [cedulaphoto, setCedulaPhoto] = useState('')
    const [state, setState] = useState('');
    
    //const [rol, setRol] = useState ('')
    const { signup, error, isLoading } = useSignup()

    const { imagecedula } = useImageUpload()

    const chekboxState = () => {
        
        var isChecked = document.getElementById('chekVal').checked;
        setState(isChecked)

    }

    // Constant function that control the form
    const handleSubmit = async (e) => {
        if (!state) {
            e.preventDefault()

            toast.error("No acepto terminos y condicones")
        }
        else {
            
            e.preventDefault()

          
    
            //var data = await imagecedula( formData); 

            //console.log({data})

            try {
                await signup(email, password, roles.delegado, nombre, apellidos, telefono, false)
            
                const fetchWorkout = async (email) =>{
                    const response = await fetch('/api/user/getOneuseremail',{
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({email})
                    })
                    const json = await response.json()
                    
                    if(response.ok){
                        const formData = new FormData()
                        formData.append('name', cedulaphoto.name);
                        formData.append('fedeimage', cedulaphoto);
                        formData.append('categoria', 'cedula');
                        formData.append('user', json.user._id);
                        await imagecedula( formData); 
    
                    }
                }
                fetchWorkout(email)
                
                
            } catch (error) {
                console.log(error)
            }

            

        }
    }

    const SingleFileChange = (e) => {
        setCedulaPhoto(e.target.files[0]);
    }

    return (

        <div>

            {/* First left-half of the screen with the logo and the FEDEPAT's legend */}
            <div className="Main-Container">
                <img className="Main-Img" src={fedepat} alt="Fedepat" />
                <p className='Logo-Text'>Federación costarricense de <br /> Patinaje y Deportes afines</p>
            </div>



            <form onSubmit={handleSubmit} className='Main-Login'>





                {/* Page title */}
                <h3 className="Title">Registro de delegado</h3>


                {/* Put the elements next to other */}

                <div className="Line-Inputs">

                    {/* User's name */}
                    <div className="Line-Inputs-Blocks">
                        <label className="Sub-Title">Nombre</label>
                        <input
                            className="Input-Personal-Data"
                            type="text"
                            placeholder="Escriba su nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                        />
                    </div>



                    {/* User's Last name */}
                    <div className="Line-Inputs-Blocks">
                        <label className="Sub-Title">Apellidos</label>
                        <input
                            className="Input-Personal-Data"
                            type="text"
                            placeholder="Escriba sus apellidos"
                            onChange={(e) => setApellidos(e.target.value)}
                            value={apellidos}
                        />
                    </div>

                </div>

                {/* Put the elements next to each other */}
                <div className="Line-Inputs">



                    {/* User's email */}
                    <div className="Line-Inputs-Blocks">
                        <label className="Sub-Title">Email</label>
                        <input
                            className="Input-Personal-Data"
                            type="email"
                            placeholder="Escriba su email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>


                    {/* User's cellphone number */}
                    <div className="Line-Inputs-Blocks">
                        <label className="Sub-Title">Teléfono</label>
                        <input
                            className="Input-Personal-Data"
                            type="text"
                            placeholder="8888 88 88"
                            onChange={(e) => setTelefono(e.target.value)}
                            value={telefono}
                        />
                    </div>

                </div>

                {/* Put the elements next to each other */}
                <div className="Line-Inputs">



                    {/* User's image cedula */}
                    <div className="Line-Inputs-Blocks">
                        <label className="Sub-Title">Cedula</label>
                        <input
                            className="Input-Personal-Data"
                            type="file"
                            onChange={(e) =>  SingleFileChange (e)}
                        />
                    </div>

                </div>


                {/* User's password */}
                <label className="Sub-Title-Password">Contraseña</label>
                <input
                    className="Input-Personal-Password"
                    type="password"
                    placeholder="Escriba su contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

            
            

            {/* Checkbox para terminos y condiciones*/}
            <div className="Terminos-checkbox">
                <input 
                    type="checkbox" 
                    id="chekVal" 
                    name="topping" 
                    value="Paneer" 
                    onChange={()=>chekboxState()} />
                <label className="Terminos-Texto-pantalla">Acepto los</label><a href="#openModal" className="Terminos-Texto-pantalla-link">términos y condiciones</a>
            </div>
            
            
            {/* Ventana emergente con los terminos y condiciones */}
            <div id="openModal" className="modalDialog">
                <div>
                    <a href="#closemodal" title="Close" className="closemodal">X</a>
                        <label className="Terminos-Texto-Titulo">Términos y condiciones</label>
                        <label className="Terminos-Texto-Cuerpo">  
                            Los Términos y Condiciones representan el documento que ayuda a prevenir y resolver los problemas. 
                            Por ello, son fundamentales en muchos casos para defenderse en caso de abuso. Las Condiciones de servicio establecen 
                            la forma en que se puede utilizar tu producto, servicio o contenido de forma legalmente vinculante.
                        </label>
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